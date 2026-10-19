'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string }
        console.log(user);
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })
        if (data) {
            console.log(data);
            redirect('/')
        }
        if (error) {
            toast.error(error.message)
        }

    }

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        })
    }
    return (
        <div className="flex flex-col items-center px-4 py-8 sm:py-10 bg-[#FAFAFA] min-h-[37.5rem]">
            <h2 className="font-bold text-2xl sm:text-3xl text-red-800 text-center">সাইন আপ</h2>
            <form onSubmit={onSubmit} className="w-full max-w-md">
                <fieldset className="fieldset border-base-300 rounded-box w-full p-2 sm:p-4">


                    <label className="label text-md font-bold ">নাম</label>
                    <input type="name" className="input w-full" name="name" />

                    <label className="label text-md font-bold ">ImageURL</label>
                    <input type="url" className="input w-full" name="image" />

                    <label className="label text-md font-bold ">ইমেইল</label>
                    <input type="email" className="input w-full" name="email" />

                    <label className="label text-md font-bold ">পাসওয়ার্ড</label>
                    <input type="password" className="input w-full" name="password" />

                    <button type="submit" className="btn bg-red-800 text-white mt-4 w-full">সাইন আপ করুন</button>
                </fieldset>
            </form>
            
            <div className="my-2">or</div>
            <button className="btn bg-white text-black border-[#e5e5e5] w-full max-w-md" onClick={handleGoogle}>
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                SignUp with Google
            </button>
  
        </div>
    );
};

export default SignUpPage;