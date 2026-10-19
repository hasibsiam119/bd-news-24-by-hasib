import { News } from "@/type";
import Link from "next/link";



const TopNews =async () => {
    'use cache'
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const news:News[] = data.data
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-5">
            <h1 className="font-bold text-red-900 text-xl sm:text-2xl">সর্বাধিক পঠিত</h1>
            <div>
            {
                news.map((n,i)=><Link key={n.id} href={`/news/${n.id}`}><h1  className="py-2.5 sm:py-3 font-bold text-sm sm:text-base hover:text-red-700 flex gap-2 break-words"><div className="text-red-700 text-xl sm:text-2xl shrink-0">{i+1}.  </div> <span className="min-w-0">{n.title}</span> </h1></Link>)
            }
            </div>
        </div>
    );
};

export default TopNews;