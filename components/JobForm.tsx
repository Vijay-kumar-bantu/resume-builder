import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "./Button";

interface JobFormProps {
	onSubmit: (jobDescription: string) => void;
	isLoading: boolean;
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, isLoading }) => {
	const [jobDescription, setJobDescription] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (jobDescription.trim()) {
			onSubmit(jobDescription);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="h-full flex flex-col"
		>
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
					Job Description
				</h2>
				<p className="text-gray-600 dark:text-gray-300">
					Enter your job description below and get a professional Resume
					instantly.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="flex-1 flex flex-col">
				{/* <label
					htmlFor="jobDescription"
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Job Description
				</label> */}

				<textarea
					id="jobDescription"
					value={jobDescription}
					onChange={(e) => setJobDescription(e.target.value)}
					placeholder="E.g., Looking for a Full Stack Developer with 3+ years of experience in React and Node.js..."
					className="flex-1 p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full resize-none transition-all mb-4"
					required
				/>

				<Button
					type="submit"
					isLoading={isLoading}
					icon={<Send size={16} />}
					className="w-full"
				>
					Generate Response
				</Button>
			</form>
		</motion.div>
	);
};

export default JobForm;
