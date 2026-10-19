import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headlines {
    title:string
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headlines:Headlines[] = data.data
    return (
        <div className=" bg-red-700 text-white sticky top-0 z-999">
        <div className="flex max-w-7xl mx-auto overflow-hidden">
             <div className="bg-red-800 text-white font-bold py-1.5 px-3 text-sm shrink-0 whitespace-nowrap sm:py-2 sm:px-5 sm:text-base">সর্বশেষ</div>
        <div className="flex-1 min-w-0 overflow-hidden">
        <MarqueeText direction="right" duration={15}>
           
            <div className="py-1.5 px-3 text-sm whitespace-nowrap sm:py-2 sm:px-5 sm:text-base">
                {
                    headlines.map((h, i) => <span key={i}> <span> {h.title} </span> <span className="mx-3 sm:mx-5">●</span></span>)
                }
            </div>
        </MarqueeText>
        </div>
        </div>
        </div>
    );
};

export default Marquee;