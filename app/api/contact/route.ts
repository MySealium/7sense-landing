import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "2fdd8f851bbb80f6ba4cf165465e67f3";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, organization, project, message } = body;

        if (!process.env.NOTION_API_KEY) {
            console.error("NOTION_API_KEY is missing");
            return NextResponse.json({ error: "Configuration error" }, { status: 500 });
        }

        await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                Email: {
                    email: email,
                },
                Organization: {
                    rich_text: [
                        {
                            text: {
                                content: organization,
                            },
                        },
                    ],
                },
                "Project Type": {
                    select: {
                        name: project, // This will match the select options: 'Vessel Modernization', 'Infrastructure', etc.
                    },
                },
                "Lead Captured": {
                    date: {
                        start: new Date().toISOString(),
                    },
                },
            },
            children: [
                {
                    object: "block",
                    type: "heading_2",
                    heading_2: {
                        rich_text: [{ type: "text", text: { content: "Lead Mission Context" } }],
                    },
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [{ type: "text", text: { content: message } }],
                    },
                },
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Notion Error:", error);
        return NextResponse.json({ error: error.message || "Failed to submit" }, { status: 500 });
    }
}
