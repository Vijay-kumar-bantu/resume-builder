"use client";

import React, { createContext, useContext, useState } from "react";

interface User {
	id: string;
	email: string;
	fullName: string;
	phone?: string;
	experience?: string;
	education?: string;
}

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (
		email: string,
		password: string,
		fullName: string
	) => Promise<void>;
	logout: () => void;
	updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	const login = async (email: string, password: string) => {
		// Simulate API call
		const mockUser: User = {
			id: "1",
			email,
			fullName: "John Doe",
		};
		setUser(mockUser);
	};

	const register = async (
		email: string,
		password: string,
		fullName: string
	) => {
		// Simulate API call
		const mockUser: User = {
			id: "1",
			email,
			fullName,
		};
		setUser(mockUser);
	};

	const logout = () => {
		setUser(null);
	};

	const updateProfile = async (data: Partial<User>) => {
		if (user) {
			setUser({ ...user, ...data });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				login,
				register,
				logout,
				updateProfile,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
