

import Image from "next/image";
import { notFound } from "next/navigation";

interface DescriptionBlock {
  type?: string;
  model?: {
    blocks?: {
      type?: string;
      model?: {
        text?: string;
        blocks?: {
          type?: string;
          model?: {
            text?: string;
          };
        }[];
      };
    }[];
  };
}

interface Description {
  blocks?: DescriptionBlock[];
}

interface NewsBody {
  type: string;
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string | null;
  altText?: string;
  copyrightHolder?: string;
}

interface News {
  id: string;
  title: string;
  description?: Description | null;
  link: string;
  imageUrl?: string;
  firstPublished: string;
  lastPublished: string;
  byline?: {
    name: string;
    role?: string;
  }[];
  topics?: {
    id: string;
    name: string;
  }[];
  tags?: string[];
  body?: NewsBody[];
  source?: string;
}

interface NewsDetailsProps {
  news: News;
}

const NewsDetails = ({ news }: NewsDetailsProps) => {
     if(!news) {
        notFound()
    }

  // Description থেকে text বের করা
  const descriptionText =
    news.description?.blocks
      ?.flatMap((block) =>
        block.model?.blocks?.map(
          (item) => item.model?.text || ""
        ) || []
      )
      .filter(Boolean)
      .join(" ") || "";

  // Main image-এর duplicate বাদ দেওয়া
  const normalizeUrl = (url?: string) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);
      return `${parsedUrl.origin}${parsedUrl.pathname}`;
    } catch {
      return url;
    }
  };

  const mainImageUrl = normalizeUrl(news.imageUrl);

  const filteredBody =
    news.body?.filter((item) => {
      if (item.type !== "image") return true;

      if (!mainImageUrl || !item.url) return true;

      return normalizeUrl(item.url) !== mainImageUrl;
    }) || [];

  // Published date
  const publishedDate = new Date(news.firstPublished);
  const isValidDate = !Number.isNaN(publishedDate.getTime());

  return (
    <article className="mx-auto max-w-4xl rounded-lg bg-white px-4 py-6 sm:px-8 sm:py-10">

      {/* Category */}
      <div className="mb-5">
        <span className="border-l-4 border-red-700 pl-3 text-sm font-bold text-red-800">
          {news.topics?.[0]?.name || "প্রধান খবর"}
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
        {news.title}
      </h1>

      {/* Description */}
      {descriptionText && (
        <p className="mb-6 text-lg leading-8 text-gray-700 sm:text-xl">
          {descriptionText}
        </p>
      )}

      {/* Author & Published Date */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <p className="font-semibold text-gray-800">
            {news.byline?.length
              ? news.byline
                  .map((author) => author.name)
                  .filter(Boolean)
                  .join(", ")
              : news.source || "BBC Bangla"}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            প্রকাশিত:{" "}
            {isValidDate
              ? publishedDate.toLocaleDateString("bn-BD", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "তারিখ পাওয়া যায়নি"}

            {isValidDate && (
              <>
                {" • "}
                {publishedDate.toLocaleTimeString("bn-BD", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </>
            )}
          </p>
        </div>

        {/* Original News Link */}
        {news.link && (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-red-800 hover:underline"
          >
            মূল সংবাদ ↗
          </a>
        )}
      </div>

      {/* Main Image */}
   

      {/* Article Body */}
      <div className="space-y-6 text-[17px] leading-8 text-gray-800 sm:text-lg sm:leading-9">
        {filteredBody.map((item, index) => {

          // Paragraph
          if (item.type === "text" && item.text) {
            return (
              <p key={index} className="whitespace-pre-line">
                {item.text}
              </p>
            );
          }

          // Subheading
          if (item.type === "subheading" && item.text) {
            return (
              <h2
                key={index}
                className="border-l-4 border-red-700 pl-3 pt-2 text-2xl font-bold leading-snug text-gray-950 sm:text-3xl"
              >
                {item.text}
              </h2>
            );
          }

          // Other Images
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="py-2">
                <Image
                  src={item.url}
                  alt={item.altText || news.title}
                  width={item.width || 1200}
                  height={item.height || 675}
                  className="h-auto w-full rounded-md object-cover"
                />

                {/* Image Caption */}
                {item.caption && (
                  <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                    {item.caption}
                  </figcaption>
                )}

                {/* Copyright */}
                {item.copyrightHolder && (
                  <p className="mt-1 text-xs text-gray-400">
                    ছবি: {item.copyrightHolder}
                  </p>
                )}
              </figure>
            );
          }

          return null;
        })}
      </div>

      {/* Tags */}
      {!!news.tags?.length && (
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="mb-4 text-sm font-bold text-gray-900">
            সম্পর্কিত বিষয়
          </h2>

          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Source */}
      <div className="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-500">
        Source: {news.source || "BBC Bangla"}
      </div>

    </article>
  );
};

export default NewsDetails;
