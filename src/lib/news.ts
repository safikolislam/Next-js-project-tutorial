import data from '../asset/db.json';

export interface NewsItem {
    _id: string;
    title: string;
    description: string;
    snippet: string;
    url: string;
    imageUrl: string;
    language: string;
    published_at: string;
    source: string;
    categories: string[];
}

export interface NewsCardProps {
    item: NewsItem;
}

export const fetchNews = (
    category?: string,
    search?: string
): NewsItem[] => {
   
    let filteredData: NewsItem[] = data;

  
    if (category) {
        filteredData = filteredData.filter(item =>
            item.categories.includes(category)
        );
    }

   
    if (search) {
        const query = search.toLowerCase();
        filteredData = filteredData.filter(item =>
            item.title.toLowerCase().includes(query)
        );
    }

    return filteredData;
};


export const fetchNewsById =(id:string) : NewsItem | undefined =>{
    const allNews = data as NewsItem[]
    return allNews.find(item=>item._id===id)
}