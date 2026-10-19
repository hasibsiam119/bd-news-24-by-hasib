import Image from "next/image";
import Navlinks from "./navlinks";
import { Suspense } from "react";
import UserInfo from "./userInfo";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
});

const Header = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-3 sm:px-4">
                <div className="py-2 flex flex-col items-center gap-2 md:relative md:flex-row md:justify-center md:gap-0">

                    {/* Logo + Title */}
                    <div className="flex gap-2 sm:gap-3 justify-center items-center">
                        <div className="shrink-0">
                            <Image
                                src="/logo.webp"
                                width={50}
                                height={50}
                                alt="Logo"
                                className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
                            />
                        </div>

                        <div>
                            <h1 className="text-red-700 font-bold text-xl sm:text-2xl">
                                Bangla News 24
                            </h1>

                            <h2 className="text-xs sm:text-[15px]">{date}</h2>
                        </div>
                    </div>

                    {/* Buttons */}
                    <UserInfo></UserInfo>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navlinks />
                </Suspense>

            </div>
        </div>
    );
};

export default Header;