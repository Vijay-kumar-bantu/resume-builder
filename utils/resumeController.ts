"use server";

import { GoogleGenAI } from "@google/genai";
import systemPrompt from "../data/systemPrompt";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function resumeGenerator(jobDescription: string) {
	const response = await ai.models.generateContent({
		model: "gemini-2.0-flash-001",
		config: {
			systemInstruction: systemPrompt,
		},
		contents: [
			{
				role: "user",
				parts: [
					{
						text: `generate the resume for the below job description
                        
                         ${jobDescription}`,
					},
				],
			},
		],
	});

	if (response.text) {
		const answer = response.text
			.replace(/```[\s\S]*?\n([\s\S]*?)```/, "$1")
			.trim();

		return answer;
	} else {
		return "Not got answer";
	}
}

export default resumeGenerator;
