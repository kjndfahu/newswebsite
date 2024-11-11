'use client'
import { Newsblock } from "@/components/newsblock";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@/components/header";
import { NotFound } from "@/components/notfound";

interface NewsArticle {
    id: number;
    title: string;
    text: string;
    imageUrl: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export default function Home() {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [data, setData] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [storage, setStorage] = useState(0);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    useEffect(() => {
        const savedArticles = localStorage.getItem("selectedCategories");

        if (savedArticles) {
            const parsedArticles = JSON.parse(savedArticles);
            setStorage(parsedArticles);
        }
    }, []);

    useEffect(() => {
        const categoryQuery = data.length > 0 ? data.map(category => categoryMap[category] || category).join(",") : undefined;
        const searchQuery = inputValue.trim() ? inputValue : undefined;

        axios.get("/api/news", {
            params: {
                category: categoryQuery,
                search: searchQuery,
            },
        })
            .then((response) => {
                const sortedArticles = response.data.sort((a: NewsArticle, b: NewsArticle) => {
                    const dateA = new Date(a.createdAt).getTime();
                    const dateB = new Date(b.createdAt).getTime();

                    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
                });
                setArticles(sortedArticles);
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
            });
    }, [data, inputValue, sortOrder]);

    const categoryMap: { [key: string]: string } = {
        Спорт: "SPORT",
        Политика: "POLICY",
        Наука: "SCIENCE",
        Экономика: "ECONOMY",
        Погода: "WEATHER",
    };

    return (
        <div className="flex flex-col min-h-screen gap-7">
            <Header
                inputValue={inputValue}
                setInputValue={setInputValue}
                data={data}
                setData={setData}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            {articles.length > 0 ? (
                articles.map((article) => (
                    <Newsblock key={article.id} article={article} />
                ))
            ) : (
                <NotFound />
            )}
        </div>
    );
}
