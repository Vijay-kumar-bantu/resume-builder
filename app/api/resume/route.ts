import { NextRequest, NextResponse } from "next/server";
import resumeGenerator from "@/utils/resumeController";

export async function POST(req: NextRequest) {
	try {
		const { jobDescription } = await req.json();
		if (!jobDescription) {
			return NextResponse.json(
				{ response: "Missing jobDescription" },
				{ status: 400 }
			);
		}
		const result = await resumeGenerator(jobDescription);
		return NextResponse.json({ response: result });
	} catch (error) {
		console.log("Error generating resume:", error);
		return NextResponse.json(
			{ response: "Failed to generate resume" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({ message: "Resume API is running" });
}
