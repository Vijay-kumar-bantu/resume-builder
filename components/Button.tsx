import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	isLoading?: boolean;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	isLoading = false,
	icon,
	iconPosition = "left",
	className = "",
	disabled,
	...props
}) => {
	// Base styles
	const baseStyles =
		"inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

	// Variant styles
	const variantStyles = {
		primary:
			"bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm",
		secondary:
			"bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm",
		outline:
			"border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-primary-500",
	};

	// Size styles
	const sizeStyles = {
		sm: "text-xs px-2.5 py-1.5",
		md: "text-sm px-4 py-2",
		lg: "text-base px-6 py-3",
	};

	// Disabled styles
	const disabledStyles =
		disabled || isLoading ? "opacity-60 cursor-not-allowed" : "cursor-pointer";

	// Icon spacing
	const iconSpacing = icon
		? iconPosition === "left"
			? "space-x-2"
			: "space-x-2 flex-row-reverse"
		: "";

	return (
		//@ts-expect-error error from button
		<motion.button
			whileTap={{ scale: 0.98 }}
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${iconSpacing} ${className}`}
			disabled={disabled || isLoading}
			{...props}
		>
			{isLoading ? (
				<>
					<svg
						className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
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
					<span>Loading...</span>
				</>
			) : (
				<>
					{icon && <span className="flex-shrink-0">{icon}</span>}
					<span>{children}</span>
				</>
			)}
		</motion.button>
	);
};

export default Button;
