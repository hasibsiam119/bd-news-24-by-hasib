import NewsCard from "@/components/newsCard";


const CategoryPage =async ({params}) => {
    const {categoryId} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const news = data.data
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-red-900 font-bold border-b-2 border-red-900 my-5">{data.title}</h1>
            <div className="grid grid-cols-4 gap-5">
           {
            news.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
           }
           </div>
        </div>
    );
};

export default CategoryPage;

