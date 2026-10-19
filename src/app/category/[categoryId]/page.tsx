import NewsCard from "@/components/newsCard";
import { notFound } from "next/navigation";

type News = {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
};

type CategoryPageProps = {
    params: Promise<{ categoryId: string }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
     
    const { categoryId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const news: News[] = data.data
     if(!news) {
        notFound()
    }
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-red-900 font-bold border-b-2 border-red-900 my-5">{data.title}</h1>
            <div className="grid grid-cols-4 gap-5">
           {
            news.map((news: News)=><NewsCard key={news.id} news={news}></NewsCard>)
           }
           </div>
        </div>
    );
};

export default CategoryPage;