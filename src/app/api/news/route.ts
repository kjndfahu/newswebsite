import {prisma} from "../../../../prisma/prisma-client";
import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    try {
        const { title, text, imageUrl, category } = await request.json();

        if (!Object.values(Category).includes(category)) {
            return NextResponse.json(
                { error: "Invalid category" },
                { status: 400 }
            );
        }

        const externalApiUrl = 'http://localhost:3000/api/create';

        const response = await axios.post(externalApiUrl, {
            title,
            text,
            imageUrl,
            category,
        });

        return NextResponse.json(response.data, { status: 201 });
    } catch (error) {
        console.error("Error creating article:", error);
        return NextResponse.json(
            { error: "Failed to create article" },
            { status: 500 }
        );
    }
}

enum Category {
    SPORT = "SPORT",
    POLICY = "POLICY",
    SCIENCE = "SCIENCE",
    ECONOMY = "ECONOMY",
    WEATHER = "WEATHER",
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const categoryParam = searchParams.get("category");
        const search = searchParams.get("search")?.toLowerCase();

        const categories = categoryParam ? categoryParam.split(",") : [];

        const where: any = {};


        if (categories.length > 0) {
            where.category = { in: categories };
        }

        if (search) {
            where.AND = where.AND || [];
            where.AND.push({
                OR: [
                    { title: { contains: search, mode: "insensitive" } },
                    { text: { contains: search, mode: "insensitive" } },
                ],
            });
        }

        const articles = await prisma.news.findMany({
            where,
        });

        return NextResponse.json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        return NextResponse.json(
            { error: "Failed to fetch articles" },
            { status: 500 }
        );
    }
}
