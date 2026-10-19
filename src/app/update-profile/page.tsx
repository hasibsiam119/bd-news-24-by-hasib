'use client'
import { authClient } from "@/lib/auth-client";


const UpdateProfile = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newData = Object.fromEntries(formData.entries()) as { name: string, image: string }
        console.log(newData);

        await authClient.updateUser({
          ...newData
        })

    }
    return (
        <div>
            <div className="flex flex-col items-center px-4 py-8 sm:py-10 bg-[#FAFAFA] min-h-[37.5rem]">
                <h2 className="font-bold text-2xl sm:text-3xl text-red-800 text-center">আপডেট করুন</h2>
                <form onSubmit={onSubmit} className="w-full max-w-md">
                    <fieldset className="fieldset border-base-300 rounded-box w-full p-2 sm:p-4">


                        <label className="label text-md font-bold ">নাম</label>
                        <input type="name" className="input w-full" name="name" />

                        <label className="label text-md font-bold ">ImageURL</label>
                        <input type="url" className="input w-full" name="image" />


                        <button type="submit" className="btn bg-red-800 text-white mt-4 w-full sm:w-auto">আপডেট করুন</button>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;