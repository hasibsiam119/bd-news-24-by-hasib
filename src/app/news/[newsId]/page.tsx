import NotFound from "@/app/not-found";
import NewsDetails from "@/components/articleDetails";
import { Suspense } from "react";


interface NewsDetailsPageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetailsPage = async ({  params}: NewsDetailsPageProps) => {
  'use cache'

  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const result = await res.json();
  const news = result.data;
   if(!news) {
        NotFound()
    }

  return (
    <main className="min-h-screen bg-gray-50 py-6">
    
      <NewsDetails news={news} />
   
    </main>
  );
};

export default NewsDetailsPage;