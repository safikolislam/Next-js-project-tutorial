
import { NewsItem } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";


export interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
   <div className="bg-background p-4 rounded-lg shadow-md dark:shadow-sm dark:shadow-slate-800 dark:bg-card border dark:border-slate-800">
      <Link href={`/news/${item._id}`}>
        <Image
          src={item?.imageUrl}
          alt={item?.title}
          width={500}
          height={500}
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
        />
      </Link>
      <div>
        <h2 className="text-xl  font-semibold my-3">{item?.title.substring(0, 65)}</h2>
        <p className="mb-4">{item?.description.substring(0, 85)}...</p>
        <Link href={`/news/${item._id}`}>
          <Button className="">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;