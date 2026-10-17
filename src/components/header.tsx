import Image from "next/image";
import Navlinks from "./navlinks";
import { Suspense } from "react";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
});

const Header = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="py-2 relative flex items-center justify-center">

                    {/* Logo + Title */}
                    <div className="flex gap-3 justify-center items-center">
                        <div>
                            <Image
                                src="/logo.webp"
                                width={50}
                                height={50}
                                alt="Logo"
                            />
                        </div>

                        <div>
                            <h1 className="text-red-700 font-bold text-2xl">
                                Bangla News 24
                            </h1>

                            <h2 className="text-[15px]">{date}</h2>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <button className="btn btn-ghost">
                            সাইন ইন
                        </button>

                        <button className="btn btn-active btn-error bg-red-800 text-white">
                            সাইন আপ
                        </button>
                    </div>

                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navlinks />
                </Suspense>
                
            </div>
        </div>
    );
};

export default Header;