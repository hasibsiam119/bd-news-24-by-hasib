import Image from "next/image";
import Link from "next/link";
interface News {
    id:string
    category:string
    imageUrl:string
    title:string
    description:string
    link:string

}

const MainNews = ({ news }:{news:News[]} ) => {
    console.log(news);
    const firstNews = news[0]
   const restNews = news.filter((n) => n.id !== firstNews.id);
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <Link href={firstNews.link} className="w-full md:w-96 md:shrink-0">
            <div className="card bg-base-100 w-full shadow-sm">
                
                <figure>
                    <Image
                        src={firstNews.imageUrl}
                        width={600}
                        height={400}
                        alt="dccv"
                        sizes="(max-width: 768px) 100vw, 384px"
                        className="w-full h-auto"
                    >
                    </Image>
                </figure>
                
                <div className="card-body p-4 sm:p-6">
                    <div className="text-sm text-gray-800">{firstNews.category}</div>
                    <h2 className="card-title text-red-800 text-lg sm:text-xl">{firstNews.title}</h2>
                    <p className="text-sm sm:text-base">{firstNews.description}</p>
                    
                </div>
            </div>
            </Link>
            <div className="p-2 w-full min-w-0 max-h-[400px] md:max-h-[500px] overflow-y-auto bg-white rounded-lg border border-gray-200">
                {
                        restNews.map((n,i)=> <Link key={i} href={`/news/${n.id}`}><div  className="border-b-1 py-4 sm:py-5 font-bold"><p className="text-red-800 text-sm sm:text-base">{n.category}</p> <h1 className="text-sm sm:text-base">{n.title}</h1></div></Link>)
                }
            </div>
        </div>
    );
};

export default MainNews;