/**
 * IndexNow React Hook for VATALIQUE
 * Provides easy access to IndexNow functionality in React components
 */

import { useState, useCallback, useEffect } from 'react';
import { 
  submitUrl, 
  submitUrls, 
  submitCurrentPage, 
  submitAllImportantPages,
  checkIndexNowStatus,
  type IndexNowResponse,
  type IndexNowConfig 
} from '@/lib/indexnow';

interface UseIndexNowReturn {
  // Status
  isConfigured: boolean;
  isLoading: boolean;
  lastSubmission: IndexNowResponse | null;
  
  // Actions
  submitCurrentPage: () => Promise<IndexNowResponse>;
  submitUrl: (url: string, config?: Partial<IndexNowConfig>) => Promise<IndexNowResponse>;
  submitUrls: (urls: string[], config?: Partial<IndexNowConfig>) => Promise<IndexNowResponse>;
  submitAllPages: () => Promise<IndexNowResponse>;
  checkStatus: () => Promise<void>;
  
  // Utilities
  clearLastSubmission: () => void;
}

export function useIndexNow(config?: Partial<IndexNowConfig>): UseIndexNowReturn {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<IndexNowResponse | null>(null);

  // Check configuration status
  const checkStatus = useCallback(async () => {
    try {
      const status = await checkIndexNowStatus(config);
      setIsConfigured(status.configured);
    } catch (error) {
      setIsConfigured(false);
      console.error('Failed to check IndexNow status:', error);
    }
  }, [config]);

  // Submit current page
  const submitCurrentPageAction = useCallback(async (): Promise<IndexNowResponse> => {
    setIsLoading(true);
    try {
      const result = await submitCurrentPage(config);
      setLastSubmission(result);
      return result;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  // Submit single URL
  const submitUrlAction = useCallback(async (
    url: string, 
    customConfig?: Partial<IndexNowConfig>
  ): Promise<IndexNowResponse> => {
    setIsLoading(true);
    try {
      const finalConfig = { ...config, ...customConfig };
      const result = await submitUrl(url, finalConfig);
      setLastSubmission(result);
      return result;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  // Submit multiple URLs
  const submitUrlsAction = useCallback(async (
    urls: string[], 
    customConfig?: Partial<IndexNowConfig>
  ): Promise<IndexNowResponse> => {
    setIsLoading(true);
    try {
      const finalConfig = { ...config, ...customConfig };
      const result = await submitUrls(urls, finalConfig);
      setLastSubmission(result);
      return result;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  // Submit all important pages
  const submitAllPages = useCallback(async (): Promise<IndexNowResponse> => {
    setIsLoading(true);
    try {
      const result = await submitAllImportantPages(config);
      setLastSubmission(result);
      return result;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  // Clear last submission
  const clearLastSubmission = useCallback(() => {
    setLastSubmission(null);
  }, []);

  // Check status on mount
  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  return {
    // Status
    isConfigured,
    isLoading,
    lastSubmission,
    
    // Actions
    submitCurrentPage: submitCurrentPageAction,
    submitUrl: submitUrlAction,
    submitUrls: submitUrlsAction,
    submitAllPages,
    checkStatus,
    
    // Utilities
    clearLastSubmission
  };
}
