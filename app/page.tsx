"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	Sparkles,
	CheckCircle,
	Zap,
	Shield,
	Mail,
	Phone,
	MapPin,
	Twitter,
	Linkedin,
	Github,
} from "lucide-react";
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";

const LandingPage: React.FC = () => {
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
	const { isAuthenticated } = useAuth();
	const navigate = redirect;
	const currentYear = new Date().getFullYear();

	const features = [
		{
			icon: <Sparkles className="h-6 w-6 text-primary-600" />,
			title: "AI-Powered Responses",
			description:
				"Get professionally crafted job descriptions instantly using advanced AI technology.",
		},
		{
			icon: <CheckCircle className="h-6 w-6 text-primary-600" />,
			title: "Industry Standards",
			description:
				"All responses follow best practices and current industry standards.",
		},
		{
			icon: <Zap className="h-6 w-6 text-primary-600" />,
			title: "Lightning Fast",
			description: "Generate complete job descriptions in seconds, not hours.",
		},
		{
			icon: <Shield className="h-6 w-6 text-primary-600" />,
			title: "Secure & Private",
			description:
				"Your data is encrypted and never shared with third parties.",
		},
	];

	const footerLinks = {
		product: [
			{ name: "Features", href: "#" },
			{ name: "Pricing", href: "#" },
			{ name: "API", href: "#" },
			{ name: "Documentation", href: "#" },
		],
		company: [
			{ name: "About", href: "#" },
			{ name: "Blog", href: "#" },
			{ name: "Careers", href: "#" },
			{ name: "Press", href: "#" },
		],
		resources: [
			{ name: "Help Center", href: "#" },
			{ name: "Community", href: "#" },
			{ name: "Templates", href: "#" },
			{ name: "Status", href: "#" },
		],
		legal: [
			{ name: "Privacy Policy", href: "#" },
			{ name: "Terms of Service", href: "#" },
			{ name: "Cookie Policy", href: "#" },
			{ name: "GDPR", href: "#" },
		],
	};

	const socialLinks = [
		{ name: "Twitter", icon: Twitter, href: "#" },
		{ name: "LinkedIn", icon: Linkedin, href: "#" },
		{ name: "GitHub", icon: Github, href: "#" },
	];

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
			{/* Background gradient effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-primary-200/30 dark:bg-primary-900/20 rounded-full filter blur-[120px] animate-pulse-slow" />
				<div className="absolute -bottom-[20%] -right-[10%] w-[45%] h-[45%] bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full filter blur-[120px] animate-pulse-slow" />
			</div>

			{/* Header */}
			<header className="relative z-10">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<Sparkles className="h-8 w-8 text-primary-600" />
							<span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
								Resume<span className="text-primary-600">AI</span>
							</span>
						</div>
						<div className="flex items-center space-x-4">
							<ThemeToggle />
							{isAuthenticated ? (
								<Button onClick={() => navigate("/dashboard")}>
									Dashboard
								</Button>
							) : (
								<Button onClick={() => setIsAuthModalOpen(true)}>
									Sign In
								</Button>
							)}
						</div>
					</div>
				</nav>
			</header>

			{/* Main Content */}
			<main className="flex-1 relative z-10">
				{/* Hero Section */}
				<div className="relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
						<div className="text-center">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
							>
								<span className="block">Create Perfect</span>
								<span className="block text-primary-600">Job Descriptions</span>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
							>
								Generate professional job descriptions in seconds using AI. Save
								time and attract the best talent with perfectly crafted job
								posts.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
							>
								<Button
									size="lg"
									onClick={() =>
										isAuthenticated
											? navigate("/dashboard")
											: setIsAuthModalOpen(true)
									}
								>
									Get Started
								</Button>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="py-24 bg-white dark:bg-gray-800">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
								Why Choose JobDescAI?
							</h2>
							<p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
								Everything you need to create professional job descriptions
							</p>
						</div>

						<div className="mt-20">
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
								{features.map((feature, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="relative p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md"
									>
										<div className="absolute -top-10 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
											{feature.icon}
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">
											{feature.title}
										</h3>
										<p className="mt-2 text-base text-gray-500 dark:text-gray-400">
											{feature.description}
										</p>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Main Footer Content */}
					<div className="py-12 lg:py-16">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
							{/* Brand Section */}
							<div className="lg:col-span-2">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true }}
									className="flex items-center space-x-2 mb-4"
								>
									<div className="p-1.5 bg-primary-600 rounded-md shadow-md">
										<Sparkles size={24} className="text-white" />
									</div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white">
										JobDesc<span className="text-primary-600">AI</span>
									</h3>
								</motion.div>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 }}
									viewport={{ once: true }}
									className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm"
								>
									Create professional job descriptions in seconds with our
									AI-powered platform. Trusted by thousands of companies
									worldwide.
								</motion.p>

								{/* Contact Info */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true }}
									className="space-y-3"
								>
									<div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
										<Mail size={16} className="text-primary-600" />
										<span>hello@jobdescai.com</span>
									</div>
									<div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
										<Phone size={16} className="text-primary-600" />
										<span>+1 (555) 123-4567</span>
									</div>
									<div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
										<MapPin size={16} className="text-primary-600" />
										<span>San Francisco, CA</span>
									</div>
								</motion.div>
							</div>

							{/* Product Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								viewport={{ once: true }}
							>
								<h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
									Product
								</h4>
								<ul className="space-y-3">
									{footerLinks.product.map((link) => (
										<li key={link.name}>
											<a
												href={link.href}
												className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
											>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</motion.div>

							{/* Company Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
									Company
								</h4>
								<ul className="space-y-3">
									{footerLinks.company.map((link) => (
										<li key={link.name}>
											<a
												href={link.href}
												className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
											>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</motion.div>

							{/* Resources Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
									Resources
								</h4>
								<ul className="space-y-3">
									{footerLinks.resources.map((link) => (
										<li key={link.name}>
											<a
												href={link.href}
												className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
											>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</motion.div>

							{/* Legal Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								viewport={{ once: true }}
							>
								<h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
									Legal
								</h4>
								<ul className="space-y-3">
									{footerLinks.legal.map((link) => (
										<li key={link.name}>
											<a
												href={link.href}
												className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
											>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="py-6 border-t border-gray-200 dark:border-gray-800">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							{/* Copyright */}
							<motion.p
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								className="text-sm text-gray-600 dark:text-gray-400"
							>
								© {currentYear} JobDescAI. All rights reserved. Built with ❤️
								using StackBlitz.
							</motion.p>

							{/* Social Links */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								viewport={{ once: true }}
								className="flex space-x-4"
							>
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<a
											key={social.name}
											href={social.href}
											className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
											aria-label={social.name}
										>
											<Icon size={20} />
										</a>
									);
								})}
							</motion.div>
						</div>
					</div>
				</div>

				{/* Background Decoration */}
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
			</footer>

			<AuthModal
				isOpen={isAuthModalOpen}
				onClose={() => setIsAuthModalOpen(false)}
			/>
		</div>
	);
};

export default LandingPage;
