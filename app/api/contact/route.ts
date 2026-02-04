import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const PAGE_ID = process.env.NOTION_PAGE_ID || "2fcd8f851bbb81eb890bd1a11b45c6a1";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, organization, project, message } = body;

        if (!process.env.NOTION_API_KEY) {
            console.error("NOTION_API_KEY is missing");
            return NextResponse.json({ error: "Configuration error" }, { status: 500 });
        }

        await notion.pages.create({
            parent: { page_id: PAGE_ID },
            properties: {
                title: {
                    title: [
                        {
                            text: {
                                content: `Lead: ${name} (${organization})`,
                            },
                        },
                    ],
                },
            },
            children: [
                {
                    object: "block",
                    type: "heading_2",
                    heading_2: {
                        rich_text: [{ type: "text", text: { content: "Lead Details" } }],
                    },
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { type: "text", text: { content: "Name: " }, annotations: { bold: true } },
                            { type: "text", text: { content: name } },
                        ],
                    },
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { type: "text", text: { content: "Email: " }, annotations: { bold: true } },
                            { type: "text", text: { content: email } },
                        ],
                    },
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { type: "text", text: { content: "Organization: " }, annotations: { bold: true } },
                            { type: "text", text: { content: organization } },
                        ],
                    },
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { type: "text", text: { content: "Project: " }, annotations: { bold: true } },
                            { type: "text", text: { content: project } },
                        ],
                    },
                },
                {
                    object: "block",
                    type: "divider",
                    divider: {},
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
