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
            <div className="flex flex-col items-center py-10  bg-[#FAFAFA] h-150">
                <h2 className="font-bold text-3xl text-red-800">আপডেট করুন</h2>
                <form onSubmit={onSubmit}>
                    <fieldset className="fieldset  border-base-300 rounded-box w-md p-4">


                        <label className="label text-md font-bold ">নাম</label>
                        <input type="name" className="input w-md" name="name" />

                        <label className="label text-md font-bold ">ImageURL</label>
                        <input type="url" className="input w-md" name="image" />


                        <button type="submit" className="btn bg-red-800 text-white mt-4">আপডেট করুন</button>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;