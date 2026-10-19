import Link from "next/link";
interface Navs {
    slug: string,
    title: string,
    topicId: string | null,
    url: string,
    scrapable: boolean
}

const Navlinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navs = data.data
    const filteredNavs: Navs[] = navs.filter((n: Navs) => n.scrapable)
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 py-3 sm:py-4 text-sm sm:text-base">
            <Link href={'/'}>হোম</Link>
            {filteredNavs.map((n, i) => <Link key={i} href={`/category/${n.slug}`}>{n.title}</Link>)}
        </div>
    );
};

export default Navlinks;