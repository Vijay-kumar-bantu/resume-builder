import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon size={20} className="text-gray-200" />
        ) : (
          <Sun size={20} className="text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;