import { NewsArticle } from "../types/NewsArticle";
import axios from "axios";

interface APINewsArticle {
    title: string;
    publishDate: string;
    author: string;
    description: string;
    link: string;
}

export const fetchNewsArticles = async (): Promise<Array<NewsArticle>> => {
    const { data } = await axios.get(
        "http://localhost:8080/wp-json/apnic-foundation-news/news-feed"
    );

    return data.map((raw: APINewsArticle) => {
        return {
            title: raw.title,
            publishDate: new Date(), // TODO: Fix Me!
            author: raw.author,
            description: raw.description,
            link: raw.link,
        };
    });
};
