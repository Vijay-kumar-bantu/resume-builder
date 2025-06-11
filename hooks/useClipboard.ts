import { useState } from 'react';

interface UseClipboardReturn {
  copyToClipboard: (text: string) => Promise<boolean>;
  copied: boolean;
}

export const useClipboard = (resetDelay = 2000): UseClipboardReturn => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard API not available');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Reset copied state after delay
      setTimeout(() => {
        setCopied(false);
      }, resetDelay);
      
      return true;
    } catch (error) {
      console.error('Failed to copy text: ', error);
      return false;
    }
  };

  return { copyToClipboard, copied };
};