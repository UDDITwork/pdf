/**
 * IndexNow Manager Component for VATALIQUE
 * Provides automatic URL submission to search engines for improved SEO
 */

'use client';

import { useEffect, useState } from 'react';
import { submitCurrentPage, submitAllImportantPages, checkIndexNowStatus } from '@/lib/indexnow';

interface IndexNowManagerProps {
  autoSubmit?: boolean;
  submitOnMount?: boolean;
  showStatus?: boolean;
  className?: string;
}

export default function IndexNowManager({
  autoSubmit = true,
  submitOnMount = true,
  showStatus = false,
  className = ''
}: IndexNowManagerProps) {
  const [status, setStatus] = useState<{
    configured: boolean;
    message: string;
  } | null>(null);
  const [lastSubmission, setLastSubmission] = useState<{
    success: boolean;
    message: string;
    timestamp: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check IndexNow configuration status
    const checkStatus = async () => {
      try {
        const statusResult = await checkIndexNowStatus();
        setStatus(statusResult);
      } catch (error) {
        setStatus({
          configured: false,
          message: 'Failed to check IndexNow status'
        });
      }
    };

    checkStatus();
  }, []);

  useEffect(() => {
    // Auto-submit current page on mount if enabled
    if (autoSubmit && submitOnMount && status?.configured) {
      handleSubmitCurrentPage();
    }
  }, [status, autoSubmit, submitOnMount]);

  const handleSubmitCurrentPage = async () => {
    if (!status?.configured || isLoading) return;

    setIsLoading(true);
    try {
      const result = await submitCurrentPage();
      setLastSubmission({
        success: result.success,
        message: result.message,
        timestamp: Date.now()
      });

      // Log submission for debugging
      console.log('IndexNow submission result:', result);
    } catch (error) {
      setLastSubmission({
        success: false,
        message: 'Failed to submit page to IndexNow',
        timestamp: Date.now()
      });
      console.error('IndexNow submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitAllPages = async () => {
    if (!status?.configured || isLoading) return;

    setIsLoading(true);
    try {
      const result = await submitAllImportantPages();
      setLastSubmission({
        success: result.success,
        message: result.message,
        timestamp: Date.now()
      });

      console.log('IndexNow bulk submission result:', result);
    } catch (error) {
      setLastSubmission({
        success: false,
        message: 'Failed to submit all pages to IndexNow',
        timestamp: Date.now()
      });
      console.error('IndexNow bulk submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render anything if showStatus is false and we're not in development
  if (!showStatus && process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className={`indexnow-manager ${className}`}>
      {showStatus && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            IndexNow Status
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${status?.configured ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-gray-700">
                {status?.configured ? 'Configured' : 'Not Configured'}
              </span>
            </div>
            
            <p className="text-sm text-gray-600">
              {status?.message}
            </p>
            
            {lastSubmission && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${lastSubmission.success ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-xs text-gray-600">
                    Last submission: {new Date(lastSubmission.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  {lastSubmission.message}
                </p>
              </div>
            )}
          </div>
          
          {status?.configured && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleSubmitCurrentPage}
                disabled={isLoading}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? 'Submitting...' : 'Submit Current Page'}
              </button>
              
              <button
                onClick={handleSubmitAllPages}
                disabled={isLoading}
                className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isLoading ? 'Submitting...' : 'Submit All Pages'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
