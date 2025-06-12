"use client";

import JobForm from "@/components/JobForm";
import Layout from "@/components/Layout";
import ResponseDisplay from "@/components/ResponseDisplay";
import { ThemeProvider } from "@/context/ThemeContext";
import { getJobResponse } from "@/utils/resumeApi";
import { motion } from "framer-motion";
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
		<ThemeProvider>
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
						<p className="text-gray-600 dark:text-gray-300 mb-6">
							Latex syntax of Professional resume will be generated here, use
							tools like overleaf to generate PDF
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
		</ThemeProvider>
	);
}
