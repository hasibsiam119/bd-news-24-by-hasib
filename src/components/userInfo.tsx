'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";


const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user);

    const handleSignout =async()=>{
        await authClient.signOut();
    }

    return (
        <div>
            {
                user ?
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img  src={user?.image as string} />
                            </div>
                        </div>
                        <div>
                            {user.name}
                        </div>
                        <button className="btn btn-error btn-sm text-white bg-red-800" onClick={handleSignout}>Sign Out</button>
                    </div>
                    :
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                       <Link href={'/signIn'}> <button className="btn btn-ghost">
                            সাইন ইন
                        </button>
                        </Link>

                       <Link href={'/signUp'}> <button className="btn btn-active btn-error bg-red-800 text-white">
                            সাইন আপ
                        </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default UserInfo;