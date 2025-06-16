"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const ProfilePage: React.FC = () => {
	const { user, updateProfile } = useAuth();
	const [formData, setFormData] = useState({
		fullName: user?.fullName || "",
		email: user?.email || "",
		phone: user?.phone || "",
		experience: user?.experience || "",
		education: user?.education || "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await updateProfile(formData);
			// Show success message
		} catch (error) {
			console.error("Error updating profile:", error);
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
				className="max-w-2xl mx-auto"
			>
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
					<div className="p-6 border-b border-gray-200 dark:border-gray-700">
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
							Profile Settings
						</h1>
						<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
							Update your personal information and preferences
						</p>
					</div>

					<form onSubmit={handleSubmit} className="p-6 space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Full Name
							</label>
							<input
								type="text"
								value={formData.fullName}
								onChange={(e) =>
									setFormData({ ...formData, fullName: e.target.value })
								}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Email
							</label>
							<input
								type="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Phone Number
							</label>
							<input
								type="tel"
								value={formData.phone}
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Professional Experience
							</label>
							<textarea
								value={formData.experience}
								onChange={(e) =>
									setFormData({ ...formData, experience: e.target.value })
								}
								rows={4}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								placeholder="Describe your professional experience..."
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Education
							</label>
							<textarea
								value={formData.education}
								onChange={(e) =>
									setFormData({ ...formData, education: e.target.value })
								}
								rows={4}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								placeholder="List your educational background..."
							/>
						</div>

						<div className="flex justify-end">
							<Button
								type="submit"
								isLoading={isLoading}
								icon={<Save size={16} />}
							>
								Save Changes
							</Button>
						</div>
					</form>
				</div>
			</motion.div>
		</Layout>
	);
};

export default ProfilePage;
