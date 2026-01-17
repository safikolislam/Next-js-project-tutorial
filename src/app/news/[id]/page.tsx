import Image from "next/image";
import { notFound } from "next/navigation";
import NewsData from "../../../asset/db.json";
import { NewsItem } from "@/lib/news";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DetailsProps {
  params: Promise<{ id: string }>;
}


export async function generateStaticParams() {
  const news = NewsData as NewsItem[];

  return news.map((item) => ({
    id: item._id, 
  }));
}


export async function generateMetadata({ params }: DetailsProps) {
  const { id } = await params;
  const item = (NewsData as NewsItem[]).find((d) => d._id === id);
  if (!item) return { title: "News Not Found" };

  return { title: item.title };
}

const Details = async ({ params }: DetailsProps) => {
  const { id } = await params;
  const item = (NewsData as NewsItem[]).find((d) => d._id === id);

  if (!item) notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="relative aspect-video w-full mb-6">
        <Image  
          src={item.imageUrl} 
          alt={item.title} 
          fill 
          className="object-cover rounded-xl"
          priority 
        />
      </div>
      <h1 className="font-extrabold text-4xl mb-4 tracking-tight">{item.title}</h1>
      <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
      <Link href="/news"><Button className="mt-5">← Back to News</Button></Link>
    </main>
  );
};

export default Details;

