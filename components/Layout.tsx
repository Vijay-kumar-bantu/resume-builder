import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-primary-200/30 dark:bg-primary-900/20 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[45%] h-[45%] bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full filter blur-[120px] animate-pulse-slow" />
      </div>
      
      {/* Header */}
      <header className="p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="p-1.5 bg-primary-600 rounded-md shadow-md">
              <Sparkles size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">JobDesc<span className="text-primary-600">AI</span></h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} JobDescAI. Created with StackBlitz.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;