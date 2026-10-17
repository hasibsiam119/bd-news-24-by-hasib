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
        <div className="flex gap-4 justify-center py-4">
            <Link href={'/'}>হোম</Link>
            {filteredNavs.map((n, i) => <Link key={i} href={n.slug}>{n.title}</Link>)}
        </div>
    );
};

export default Navlinks;