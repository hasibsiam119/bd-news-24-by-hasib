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
        <div className=" bg-red-700 text-white">
        <div className="flex max-w-7xl mx-auto ">
             <div className="bg-red-800 text-white font-bold py-2 px-5 ">সর্বশেষ</div>
        <MarqueeText direction="right" duration={15}>
           
            <div className=" py-2 px-5">
                {
                    headlines.map((h, i) => <span key={i}> <span> {h.title} </span> <span className="mx-5">●</span></span>)
                }
            </div>
        </MarqueeText>
        </div>
        </div>
    );
};

export default Marquee;