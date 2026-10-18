import NewsDetails from "@/components/articleDetails";
import { connection } from "next/server";

interface NewsDetailsPageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetailsPage = async ({
  params,
}: NewsDetailsPageProps) => {
  await connection();

  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const result = await res.json();
  const news = result.data;

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      <NewsDetails news={news} />
    </main>
  );
};

export default NewsDetailsPage;