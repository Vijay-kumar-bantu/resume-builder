"use client";

export const getJobResponse = async (
	jobDescription: string
): Promise<string> => {
	// Simulate API call delay
	const res = await fetch("http://localhost:3001/resume", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ jobDescription }),
	});
	const data = await res.json();

	return data.response as string;
};
