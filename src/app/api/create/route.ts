import {Category} from "@prisma/client";
import {NextResponse} from "next/server";
import {prisma} from "../../../../prisma/prisma-client";

export async function POST(request: Request) {
    try {
        const { title, text, imageUrl, category } = await request.json();

        if (!Object.values(Category).includes(category)) {
            return NextResponse.json(
                { error: "Invalid category" },
                { status: 400 }
            );
        }
        const newArticle = await prisma.news.create({
            data: {
                title,
                text,
                imageUrl,
                category,
            },
        });

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error("Error creating article:", error);
        return NextResponse.json(
            { error: "Failed to create article" },
            { status: 500 }
        );
    }
}