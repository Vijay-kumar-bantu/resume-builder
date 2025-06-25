"use client";

import JobForm from "@/components/JobForm";
import Layout from "@/components/Layout";
import ResponseDisplay from "@/components/ResponseDisplay";
import { resume_link } from "@/data/constants";
import { getJobResponse } from "@/utils/resumeApi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [response, setResponse] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (jobDescription: string) => {
		setIsLoading(true);
		try {
			const result = await getJobResponse(jobDescription);
			setResponse(result);
		} catch (error) {
			console.error("Error getting response:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 border border-gray-200 dark:border-gray-700"
			>
				<div className="p-6">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
						Resume Generator
					</h1>
					<p className="text-gray-600 dark:text-gray-300">
						Latex syntax of Professional resume will be generated here, use
						tools like overleaf to generate PDF
					</p>
					<p className="text-gray-600 dark:text-gray-300">
						check the resume{" "}
						<Link
							href={resume_link}
							className="underline underline-offset-2 text-blue-600 dark:text-blue-400"
						>
							here
						</Link>
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 pt-0">
					<div className="h-[500px] lg:h-[600px] flex">
						<JobForm onSubmit={handleSubmit} isLoading={isLoading} />
					</div>

					<div className="h-[500px] lg:h-[600px] flex">
						<ResponseDisplay response={response} isLoading={isLoading} />
					</div>
				</div>
			</motion.div>
		</Layout>
	);
}
