import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// Primary Database ID for 7SENSE LEAD PIPELINE
const DATABASE_ID = process.env.NOTION_DATABASE_ID || "2fdd8f851bbb80f6ba4cf165465e67f3";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, organization, project, message } = body;

        if (!process.env.NOTION_API_KEY) {
            console.error("CRITICAL: NOTION_API_KEY is missing from environment.");
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
        }

        // Orchestrate the lead record in the 7SENSE CRM
        await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                Name: {
                    title: [{ text: { content: name || "Anonymous Lead" } }],
                },
                Email: {
                    email: email || null,
                },
                Organization: {
                    rich_text: [{ text: { content: organization || "N/A" } }],
                },
                "Project Type": {
                    select: {
                        name: project || "Consulting",
                    },
                },
                "Lead Captured": {
                    date: {
                        start: new Date().toISOString(),
                    },
                },
                Status: {
                    select: {
                        name: "📥 New Lead",
                    },
                },
                Priority: {
                    select: {
                        name: "P2 - Medium", // Default priority for triage
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
                        rich_text: [{ type: "text", text: { content: message || "No message provided." } }],
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
                        rich_text: [
                            {
                                type: "text",
                                text: { content: "Timestamp: " },
                                annotations: { bold: true, code: true }
                            },
                            {
                                type: "text",
                                text: { content: new Date().toLocaleString() }
                            },
                        ],
                    },
                },
            ],
        });

        console.log(`✅ Lead Captured: ${name} from ${organization}`);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("NOTION_ORCHESTRATION_ERROR:", error);

        // Detailed error reporting for debugging
        return NextResponse.json({
            error: "Failed to process lead capture",
            details: error.message,
            code: error.code
        }, { status: 500 });
    }
}
