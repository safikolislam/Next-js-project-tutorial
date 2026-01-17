import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import data from "@/asset/db.json"
import { NewsItem } from "@/lib/news";

import NewsLetter from "@/components/NewsLetter";

 const Home= async()=> {


  return (
    <div >
    <Banner></Banner>
    <h2 className="font-bold text-xl py-10 mt-5">Latest News</h2>
    <div
    
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-12 gap-5">
      { 
        data.slice(0, 3).map((item:NewsItem)=>(
 <NewsCard key={item._id} item={item}></NewsCard>
        ))
      }

    </div>
<NewsLetter></NewsLetter>
    </div>
  );
}
export default Home