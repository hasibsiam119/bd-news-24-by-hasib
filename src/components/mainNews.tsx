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
        <div className="flex gap-4">
            <Link href={`/news/${firstNews.id}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                
                <figure>
                    <Image src={firstNews.imageUrl} width={600} height={400} alt="dccv">
                    </Image>
                </figure>
                
                <div className="card-body">
                    <div className="text-sm text-gray-800">{firstNews.category}</div>
                    <h2 className="card-title text-red-800">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                    
                </div>
            </div>
            </Link>
            <div className="p-2 max-h-[500px] overflow-y-auto bg-white  rounded-lg border border-gray-200">
                {
                        restNews.map((n,i)=> <Link key={i} href={`/news/${n.id}`}><div  className="border-b-1 py-5 font-bold"><p className="text-red-800">{n.category}</p> <h1>{n.title}</h1></div></Link>)
                }
            </div>
        </div>
    );
};

export default MainNews;