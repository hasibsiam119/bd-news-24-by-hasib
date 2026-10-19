import { News } from "@/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }:{news:News}) => {
  return (
    <Link
      href={`/news/${news.id}`}
      rel="noopener noreferrer"
      className="group block w-full overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 260px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[160px] flex-col p-3 sm:min-h-[185px]">
        <p className="mb-1 text-xs font-medium text-red-700">
          {news.category}
        </p>

        <h2 className="mb-2 line-clamp-3 text-base font-bold leading-snug text-gray-900 sm:text-[17px]">
          {news.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-5 text-gray-600">
          {news.description}
        </p>

        <p className="mt-auto pt-3 text-xs text-gray-400">
          {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;