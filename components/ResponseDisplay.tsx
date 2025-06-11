import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clipboard } from "lucide-react";
import Button from "./Button";
import { useClipboard } from "../hooks/useClipboard";

interface ResponseDisplayProps {
	response: string | null;
	isLoading: boolean;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
	response,
	isLoading,
}) => {
	const { copyToClipboard, copied } = useClipboard();

	// Convert markdown-like content to HTML (simple version)

	// Handle copy click
	const handleCopy = () => {
		if (response) {
			copyToClipboard(response);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="h-full flex flex-col"
		>
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
					Response
				</h2>
				<p className="text-gray-600 dark:text-gray-300">
					Your professional Resume (response will be in Latex syntax).
				</p>
			</div>

			<div className="flex-1 relative">
				<AnimatePresence mode="wait">
					{isLoading ? (
						<motion.div
							key="loading"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 flex items-center justify-center"
						>
							<div className="flex flex-col items-center">
								<svg
									className="animate-spin h-10 w-10 text-primary-600 mb-4"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								<p className="text-gray-600 dark:text-gray-300">
									Generating your professional response...
								</p>
							</div>
						</motion.div>
					) : response ? (
						<motion.div
							key="response"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="h-full flex flex-col"
						>
							<div className="max-h-[20%] flex-1 p-6 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-y-scroll">
								{response}
							</div>

							<div className="mt-4 flex justify-end">
								<Button
									variant="outline"
									onClick={handleCopy}
									icon={
										copied ? (
											<CheckCircle2 size={16} className="text-success-500" />
										) : (
											<Clipboard size={16} />
										)
									}
									className="shadow-sm"
								>
									{copied ? "Copied!" : "Copy to Clipboard"}
								</Button>
							</div>
						</motion.div>
					) : (
						<motion.div
							key="empty"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="h-full flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg"
						>
							<div className="text-center p-6">
								<div className="rounded-full bg-primary-100 dark:bg-primary-900 p-3 mx-auto mb-4 w-fit">
									<Clipboard className="h-6 w-6 text-primary-600 dark:text-primary-400" />
								</div>
								<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
									No Response Yet
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Submit a job description to see your professional Resume here
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

export default ResponseDisplay;
