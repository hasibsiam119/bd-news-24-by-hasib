import { News } from "@/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }:{news:News}) => {
  return (
    <Link
      href={`/news/${news.id}`}
      rel="noopener noreferrer"
      className="group block w-full max-w-[260px] overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-[145px] w-full overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          sizes="260px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[185px] flex-col p-3">
        <p className="mb-1 text-xs font-medium text-red-700">
          {news.category}
        </p>

        <h2 className="mb-2 line-clamp-3 text-[17px] font-bold leading-snug text-gray-900">
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