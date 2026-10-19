'use client'

import { authClient } from "@/lib/auth-client";

import Link from "next/link";


const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user);

    const handleSignout = async () => {
        await authClient.signOut();
    }

    return (
        <div>
            {
                user ?
                    <div className="flex items-center justify-center gap-2 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
                        <Link href={'/profile'} className="shrink-0">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 sm:w-10 rounded-full ring-2 ring-offset-1 sm:ring-offset-2">
                                    <img src={user?.image as string} alt={user.name} />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/profile'}>
                            <div className="max-w-[140px] md:max-w-[160px] lg:max-w-[220px] truncate text-sm md:text-base">
                                {user.name}
                            </div>
                        </Link>
                        <button className="btn btn-error btn-xs sm:btn-sm text-white bg-red-800 whitespace-nowrap" onClick={handleSignout}>Sign Out</button>
                    </div>
                    :
                    <div className="flex items-center justify-center gap-1 sm:gap-2 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
                        <Link href={'/signIn'}>
                            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md whitespace-nowrap">
                                সাইন ইন
                            </button>
                        </Link>

                        <Link href={'/signUp'}>
                            <button className="btn btn-active btn-error btn-xs sm:btn-sm md:btn-md bg-red-800 text-white whitespace-nowrap">
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default UserInfo;