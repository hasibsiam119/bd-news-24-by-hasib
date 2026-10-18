import MainNews from "@/components/mainNews";
import Marquee from "@/components/marquee";
import NewsCard from "@/components/newsCard";
import TopNews from "@/components/topNews";
import { Suspense } from "react";


export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const newsData = data.data 
  const mainNews = newsData[0].articles
  const otherNews = newsData.slice(1)
  
  return (
    <div className="bg-[#FAFAFA]">
      <Suspense>
     <Marquee></Marquee>
     </Suspense>
    <div className="grid grid-cols-3 max-w-7xl mx-auto py-4 gap-5">

      {/* main news */}
    <div className="col-span-2">
        <MainNews news = {mainNews}></MainNews>
     <div>
  {otherNews.map((on) => (
    <div key={on.curationId}>
      <h1 className="border-b-2 border-red-800 py-3 font-bold text-red-900">
        {on.title}
      </h1>
      <div className="grid grid-cols-3 gap-4 py-4">
      {
        on.articles.map(os => <NewsCard key={os.id} news={os} />)
      }
      </div>
    </div>
  ))}
</div>
    </div>

    {/* Top read */}
    <div className="col-span-1 ">
      <TopNews ></TopNews>
    </div>


    </div>
    </div>
  );
}
