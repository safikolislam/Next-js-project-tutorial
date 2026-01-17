'use client'
import { fetchNews, NewsItem } from "@/lib/news"
import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>('');

  
    const categories = ["general", "business", "technology", "entertainment", "sports", "science"];

    useEffect(() => {
        const getNews = () => {
            const data = fetchNews(category, search);
            setNews(data); 
        };
        getNews();
    }, [search, category]);

    return (
        <div className="max-w-5xl mx-auto p-4 bg-background">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
             
                <input
                    type="text"
                    placeholder="Search news by title..."
                    className="border p-2 rounded-lg w-full md:w-2/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

          
                <select
                    className="border p-2 rounded-lg w-full md:w-1/3 shadow-sm text-black"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

           
            {news.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-background">
                    {news.map((item) => (
                     
                        <div key={item._id} className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background">
                            <Image width={400} height={200}
                                src={item.imageUrl || 'https://via.placeholder.com/400x200'} 
                                alt={item.title} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <span className="text-xs font-semibold bg-green-400 text-white px-2 py-1 rounded uppercase">
                                    {item.categories[0]}
                                </span>
                                <h2 className="text-xl font-bold mt-2 line-clamp-2 text-white">{item.title}</h2>
                                <p className="text-gray-600 mt-2 text-sm line-clamp-3">{item.description}</p>
                                <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                                    <span>{item.source}</span>
                                    <span>{new Date(item.published_at).toLocaleDateString()}</span>
                                </div>
                           <Link href={`/news/${item._id}`} className="block text-center mt-4 bg-black
                            text-white rounded-lg hover:bg-gray-800 transitions-colors">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500">No news found matching your search.</p>
                </div>
            )}
        </div>
    )
}

export default NewsList;
