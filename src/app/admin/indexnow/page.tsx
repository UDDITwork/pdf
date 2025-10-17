/**
 * IndexNow Admin Dashboard for VATALIQUE
 * Manage and monitor IndexNow submissions
 */

'use client';

import { useState, useEffect } from 'react';
import { useIndexNow } from '@/hooks/useIndexNow';
import { getVataliqueImportantPages } from '@/lib/indexnow';

export default function IndexNowAdmin() {
  const {
    isConfigured,
    isLoading,
    lastSubmission,
    submitCurrentPage,
    submitUrl,
    submitAllPages,
    checkStatus,
    clearLastSubmission
  } = useIndexNow();

  const [customUrl, setCustomUrl] = useState('');
  const [submissionHistory, setSubmissionHistory] = useState<any[]>([]);

  useEffect(() => {
    // Load submission history from localStorage
    const history = localStorage.getItem('indexnow-submission-history');
    if (history) {
      try {
        setSubmissionHistory(JSON.parse(history));
      } catch (error) {
        console.error('Failed to parse submission history:', error);
      }
    }
  }, []);

  const handleSubmitCustomUrl = async () => {
    if (!customUrl.trim()) return;

    try {
      const result = await submitUrl(customUrl);
      
      // Add to history
      const newHistory = [
        {
          timestamp: Date.now(),
          type: 'custom-url',
          url: customUrl,
          result
        },
        ...submissionHistory.slice(0, 9) // Keep last 10 entries
      ];
      
      setSubmissionHistory(newHistory);
      localStorage.setItem('indexnow-submission-history', JSON.stringify(newHistory));
      
      setCustomUrl('');
    } catch (error) {
      console.error('Failed to submit custom URL:', error);
    }
  };

  const handleSubmitAllPages = async () => {
    try {
      const result = await submitAllPages();
      
      // Add to history
      const newHistory = [
        {
          timestamp: Date.now(),
          type: 'all-pages',
          urls: getVataliqueImportantPages(),
          result
        },
        ...submissionHistory.slice(0, 9)
      ];
      
      setSubmissionHistory(newHistory);
      localStorage.setItem('indexnow-submission-history', JSON.stringify(newHistory));
    } catch (error) {
      console.error('Failed to submit all pages:', error);
    }
  };

  const handleSubmitCurrentPage = async () => {
    try {
      const result = await submitCurrentPage();
      
      // Add to history
      const newHistory = [
        {
          timestamp: Date.now(),
          type: 'current-page',
          url: window.location.href,
          result
        },
        ...submissionHistory.slice(0, 9)
      ];
      
      setSubmissionHistory(newHistory);
      localStorage.setItem('indexnow-submission-history', JSON.stringify(newHistory));
    } catch (error) {
      console.error('Failed to submit current page:', error);
    }
  };

  const clearHistory = () => {
    setSubmissionHistory([]);
    localStorage.removeItem('indexnow-submission-history');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            IndexNow Admin Dashboard
          </h1>

          {/* Status Card */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Status</h2>
            <div className="flex items-center gap-4">
              <div className={`w-4 h-4 rounded-full ${isConfigured ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-gray-700">
                {isConfigured ? 'IndexNow is configured and ready' : 'IndexNow is not configured'}
              </span>
            </div>
            {!isConfigured && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Setup Required:</strong> Please add your IndexNow API key to the environment variables.
                  <br />
                  Set <code>NEXT_PUBLIC_INDEXNOW_API_KEY</code> in your .env file.
                </p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={handleSubmitCurrentPage}
                disabled={!isConfigured || isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Submitting...' : 'Submit Current Page'}
              </button>
              
              <button
                onClick={handleSubmitAllPages}
                disabled={!isConfigured || isLoading}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Submitting...' : 'Submit All Pages'}
              </button>
              
              <button
                onClick={checkStatus}
                disabled={isLoading}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
              >
                Refresh Status
              </button>
            </div>
          </div>

          {/* Custom URL Submission */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Submit Custom URL</h2>
            <div className="flex gap-4">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://vatalique.com/your-page"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSubmitCustomUrl}
                disabled={!isConfigured || isLoading || !customUrl.trim()}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Last Submission */}
          {lastSubmission && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Last Submission</h2>
              <div className={`p-4 rounded-lg ${lastSubmission.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${lastSubmission.success ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`font-semibold ${lastSubmission.success ? 'text-green-800' : 'text-red-800'}`}>
                    {lastSubmission.success ? 'Success' : 'Failed'}
                  </span>
                  <span className="text-gray-600 text-sm">
                    Status: {lastSubmission.status}
                  </span>
                </div>
                <p className={`text-sm ${lastSubmission.success ? 'text-green-700' : 'text-red-700'}`}>
                  {lastSubmission.message}
                </p>
                {lastSubmission.submittedUrls && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Submitted URLs:</p>
                    <ul className="text-xs text-gray-600 mt-1">
                      {lastSubmission.submittedUrls.map((url, index) => (
                        <li key={index} className="truncate">{url}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {lastSubmission.errors && (
                  <div className="mt-2">
                    <p className="text-sm text-red-600">Errors:</p>
                    <ul className="text-xs text-red-600 mt-1">
                      {lastSubmission.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Submission History */}
          {submissionHistory.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Submission History</h2>
                <button
                  onClick={clearHistory}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Clear History
                </button>
              </div>
              <div className="space-y-3">
                {submissionHistory.map((entry, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700 capitalize">
                        {entry.type.replace('-', ' ')}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(entry.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className={`text-sm ${entry.result.success ? 'text-green-600' : 'text-red-600'}`}>
                      {entry.result.message}
                    </div>
                    {entry.url && (
                      <div className="text-xs text-gray-600 mt-1 truncate">
                        URL: {entry.url}
                      </div>
                    )}
                    {entry.urls && (
                      <div className="text-xs text-gray-600 mt-1">
                        URLs: {entry.urls.length} pages
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Pages List */}
          <div className="bg-gray-50 rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Pages</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {getVataliqueImportantPages().map((page, index) => (
                <div key={index} className="text-sm text-gray-600 bg-white p-2 rounded border">
                  {page}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
