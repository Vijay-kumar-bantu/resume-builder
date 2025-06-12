"use client";

export const getJobResponse = async (
	jobDescription: string
): Promise<string> => {
	const res = await fetch("/api/resume", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ jobDescription }),
	});
	const data = await res.json();

	return data.response as string;
};
