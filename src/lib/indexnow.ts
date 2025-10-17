/**
 * IndexNow API utility functions for VATALIQUE
 * Implements Microsoft IndexNow protocol for real-time search engine indexing
 * Documentation: https://www.bing.com/indexnow/getstarted#implementation
 */

export interface IndexNowConfig {
  apiKey: string;
  keyLocation: string;
  host: string;
}

export interface IndexNowResponse {
  success: boolean;
  status: number;
  message: string;
  submittedUrls?: string[];
  errors?: string[];
}

// Default configuration for VATALIQUE
const DEFAULT_CONFIG: IndexNowConfig = {
  apiKey: process.env.NEXT_PUBLIC_INDEXNOW_API_KEY || '54208d9a98894f6db0abb8b145953254',
  keyLocation: 'https://vatalique.com/54208d9a98894f6db0abb8b145953254.txt',
  host: 'vatalique.com'
};

// IndexNow API endpoints - Following official documentation
const INDEXNOW_ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://api.indexnow.org/indexnow'
];

/**
 * Submit a single URL to IndexNow using GET method (as per documentation)
 * https://<searchengine>/indexnow?url=url-changed&key=your-key
 */
export async function submitUrlGet(
  url: string, 
  config: Partial<IndexNowConfig> = {}
): Promise<IndexNowResponse> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  if (!url || !isValidUrl(url)) {
    return {
      success: false,
      status: 400,
      message: 'Invalid URL provided',
      errors: ['URL must be a valid absolute URL']
    };
  }

  // Validate URL belongs to our host
  if (!url.includes(finalConfig.host)) {
    return {
      success: false,
      status: 422,
      message: 'URL does not belong to configured host',
      errors: [`URL must belong to ${finalConfig.host}`]
    };
  }

  // URL encode the parameters as per RFC-3986 standard
  const encodedUrl = encodeURIComponent(url);
  const encodedKey = encodeURIComponent(finalConfig.apiKey);
  
  const errors: string[] = [];
  let lastStatus = 200;
  let successCount = 0;
  let acceptedCount = 0;

  // Submit to multiple endpoints using GET method
  const promises = INDEXNOW_ENDPOINTS.map(async (endpoint) => {
    try {
      const getUrl = `${endpoint}?url=${encodedUrl}&key=${encodedKey}`;
      const response = await fetch(getUrl, {
        method: 'GET',
      });

      // Handle different response codes as per documentation
      if (response.status === 200) {
        successCount++;
        return true;
      } else if (response.status === 202) {
        acceptedCount++;
        return true;
      } else if (response.status === 400) {
        errors.push(`${endpoint}: Bad request - Invalid format`);
      } else if (response.status === 403) {
        errors.push(`${endpoint}: Forbidden - Key not valid or not found`);
      } else if (response.status === 422) {
        errors.push(`${endpoint}: Unprocessable Entity - URLs don't belong to host or key mismatch`);
      } else if (response.status === 429) {
        errors.push(`${endpoint}: Too Many Requests - Potential spam detection`);
      } else {
        errors.push(`${endpoint}: HTTP ${response.status}`);
      }
      
      lastStatus = response.status;
      return false;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      errors.push(`${endpoint}: Network error - ${errorMessage}`);
      lastStatus = 500;
      return false;
    }
  });

  await Promise.allSettled(promises);

  const totalSuccess = successCount + acceptedCount;
  let message = '';
  
  if (totalSuccess > 0) {
    if (successCount > 0 && acceptedCount > 0) {
      message = `Successfully submitted URL. ${successCount} confirmed, ${acceptedCount} pending validation.`;
    } else if (successCount > 0) {
      message = `Successfully submitted URL to ${successCount} endpoint(s)`;
    } else if (acceptedCount > 0) {
      message = `Accepted URL for validation at ${acceptedCount} endpoint(s)`;
    }
  } else {
    message = 'Failed to submit URL to any endpoint';
  }

  return {
    success: totalSuccess > 0,
    status: lastStatus,
    message,
    submittedUrls: [url],
    errors: errors.length > 0 ? errors : undefined
  };
}

/**
 * Submit a single URL to IndexNow (POST method for consistency with bulk submissions)
 */
export async function submitUrl(
  url: string, 
  config: Partial<IndexNowConfig> = {}
): Promise<IndexNowResponse> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  if (!url || !isValidUrl(url)) {
    return {
      success: false,
      status: 400,
      message: 'Invalid URL provided',
      errors: ['URL must be a valid absolute URL']
    };
  }

  // Validate URL belongs to our host
  if (!url.includes(finalConfig.host)) {
    return {
      success: false,
      status: 422,
      message: 'URL does not belong to configured host',
      errors: [`URL must belong to ${finalConfig.host}`]
    };
  }

  const payload = {
    host: finalConfig.host,
    key: finalConfig.apiKey,
    keyLocation: finalConfig.keyLocation,
    urlList: [url]
  };

  return submitToIndexNow(payload, [url]);
}

/**
 * Submit multiple URLs to IndexNow
 */
export async function submitUrls(
  urls: string[], 
  config: Partial<IndexNowConfig> = {}
): Promise<IndexNowResponse> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  if (!urls || urls.length === 0) {
    return {
      success: false,
      status: 400,
      message: 'No URLs provided',
      errors: ['URL list cannot be empty']
    };
  }

  // Validate all URLs
  const validUrls = urls.filter(url => isValidUrl(url) && url.includes(finalConfig.host));
  const invalidUrls = urls.filter(url => !isValidUrl(url) || !url.includes(finalConfig.host));

  if (validUrls.length === 0) {
    return {
      success: false,
      status: 422,
      message: 'No valid URLs provided',
      errors: ['All URLs must be valid and belong to configured host']
    };
  }

  const payload = {
    host: finalConfig.host,
    key: finalConfig.apiKey,
    keyLocation: finalConfig.keyLocation,
    urlList: validUrls
  };

  const response = await submitToIndexNow(payload, validUrls);
  
  if (invalidUrls.length > 0) {
    response.errors = response.errors || [];
    response.errors.push(`Skipped ${invalidUrls.length} invalid URLs`);
  }

  return response;
}

/**
 * Submit URLs to IndexNow API endpoints
 * Following the official IndexNow protocol specification
 */
async function submitToIndexNow(
  payload: any, 
  submittedUrls: string[]
): Promise<IndexNowResponse> {
  const errors: string[] = [];
  let lastStatus = 200;
  let successCount = 0;
  let acceptedCount = 0;

  // Submit to multiple IndexNow endpoints for better coverage
  // Following the documentation: search engines share URLs with each other
  const promises = INDEXNOW_ENDPOINTS.map(async (endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // Handle different response codes as per documentation
      if (response.status === 200) {
        successCount++;
        return true;
      } else if (response.status === 202) {
        // Accepted - key validation pending
        acceptedCount++;
        return true;
      } else if (response.status === 400) {
        errors.push(`${endpoint}: Bad request - Invalid format`);
      } else if (response.status === 403) {
        errors.push(`${endpoint}: Forbidden - Key not valid or not found`);
      } else if (response.status === 422) {
        errors.push(`${endpoint}: Unprocessable Entity - URLs don't belong to host or key mismatch`);
      } else if (response.status === 429) {
        errors.push(`${endpoint}: Too Many Requests - Potential spam detection`);
      } else {
        const errorText = await response.text().catch(() => 'Unknown error');
        errors.push(`${endpoint}: ${response.status} - ${errorText}`);
      }
      
      lastStatus = response.status;
      return false;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      errors.push(`${endpoint}: Network error - ${errorMessage}`);
      lastStatus = 500;
      return false;
    }
  });

  await Promise.allSettled(promises);

  const totalSuccess = successCount + acceptedCount;
  let message = '';
  
  if (totalSuccess > 0) {
    if (successCount > 0 && acceptedCount > 0) {
      message = `Successfully submitted ${submittedUrls.length} URLs. ${successCount} confirmed, ${acceptedCount} pending validation.`;
    } else if (successCount > 0) {
      message = `Successfully submitted ${submittedUrls.length} URLs to ${successCount} endpoint(s)`;
    } else if (acceptedCount > 0) {
      message = `Accepted ${submittedUrls.length} URLs for validation at ${acceptedCount} endpoint(s)`;
    }
  } else {
    message = 'Failed to submit URLs to any endpoint';
  }

  return {
    success: totalSuccess > 0,
    status: lastStatus,
    message,
    submittedUrls,
    errors: errors.length > 0 ? errors : undefined
  };
}

/**
 * Submit current page URL to IndexNow
 */
export async function submitCurrentPage(
  config: Partial<IndexNowConfig> = {}
): Promise<IndexNowResponse> {
  if (typeof window === 'undefined') {
    return {
      success: false,
      status: 400,
      message: 'Cannot submit current page on server side',
      errors: ['This function must be called on the client side']
    };
  }

  return submitUrl(window.location.href, config);
}

/**
 * Submit multiple pages based on route patterns
 */
export async function submitPageRoutes(
  routes: string[], 
  baseUrl: string = 'https://vatalique.com',
  config: Partial<IndexNowConfig> = {}
): Promise<IndexNowResponse> {
  const fullUrls = routes.map(route => {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    return `${baseUrl}/${cleanRoute}`;
  });

  return submitUrls(fullUrls, config);
}

/**
 * Validate URL format
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate IndexNow API key format
 * Key must be 8-128 hexadecimal characters: a-z, A-Z, 0-9, and dashes (-)
 */
export function validateIndexNowKey(key: string): boolean {
  if (!key || key === 'YOUR_API_KEY_HERE') {
    return false;
  }
  
  // Check length (8-128 characters)
  if (key.length < 8 || key.length > 128) {
    return false;
  }
  
  // Check format: only lowercase, uppercase, numbers, and dashes
  const validKeyRegex = /^[a-zA-Z0-9-]+$/;
  return validKeyRegex.test(key);
}

/**
 * Get all important pages for VATALIQUE website
 */
export function getVataliqueImportantPages(): string[] {
  return [
    '/',
    '/services',
    '/about',
    '/contact',
    '/pricing',
    '/platform',
    '/industries',
    '/customers',
    '/technology',
    '/security',
    '/privacy',
    '/terms',
    '/accessibility',
    '/payment-policy',
    '/status',
    '/resources'
  ];
}

/**
 * Submit all important VATALIQUE pages to IndexNow
 */
export async function submitAllImportantPages(
  config: Partial<IndexNowConfig> = {}
): Promise<IndexNowResponse> {
  const pages = getVataliqueImportantPages();
  return submitPageRoutes(pages, 'https://vatalique.com', config);
}

/**
 * IndexNow status checker - verify if API key is properly configured
 */
export async function checkIndexNowStatus(
  config: Partial<IndexNowConfig> = {}
): Promise<{ configured: boolean; message: string; details?: any }> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  // Check if API key is configured
  if (!finalConfig.apiKey || finalConfig.apiKey === 'YOUR_API_KEY_HERE') {
    return {
      configured: false,
      message: 'IndexNow API key not configured. Please add NEXT_PUBLIC_INDEXNOW_API_KEY to your environment variables.',
      details: {
        apiKeyConfigured: false,
        keyFileAccessible: false,
        keyFormatValid: false
      }
    };
  }

  // Validate API key format
  const keyFormatValid = validateIndexNowKey(finalConfig.apiKey);
  if (!keyFormatValid) {
    return {
      configured: false,
      message: 'IndexNow API key format is invalid. Key must be 8-128 characters containing only a-z, A-Z, 0-9, and dashes (-).',
      details: {
        apiKeyConfigured: true,
        keyFileAccessible: false,
        keyFormatValid: false
      }
    };
  }

  // Try to access the key file
  let keyFileAccessible = false;
  let keyFileContent = '';
  
  try {
    const response = await fetch(finalConfig.keyLocation, { method: 'GET' });
    if (response.ok) {
      keyFileAccessible = true;
      keyFileContent = await response.text();
      
      // Check if the key file contains the correct key
      const keyInFile = keyFileContent.trim();
      if (keyInFile !== finalConfig.apiKey) {
        return {
          configured: false,
          message: `API key file exists but contains different key. Expected: ${finalConfig.apiKey}, Found: ${keyInFile}`,
          details: {
            apiKeyConfigured: true,
            keyFileAccessible: true,
            keyFormatValid: true,
            keyMatchesFile: false
          }
        };
      }
    } else {
      return {
        configured: false,
        message: `API key file not accessible at ${finalConfig.keyLocation}. Status: ${response.status}`,
        details: {
          apiKeyConfigured: true,
          keyFileAccessible: false,
          keyFormatValid: true,
          httpStatus: response.status
        }
      };
    }
  } catch (error) {
    return {
      configured: false,
      message: `Cannot access API key file at ${finalConfig.keyLocation}. Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      details: {
        apiKeyConfigured: true,
        keyFileAccessible: false,
        keyFormatValid: true,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    };
  }

  return {
    configured: true,
    message: 'IndexNow is properly configured and ready to use',
    details: {
      apiKeyConfigured: true,
      keyFileAccessible: true,
      keyFormatValid: true,
      keyMatchesFile: true,
      keyLength: finalConfig.apiKey.length,
      keyLocation: finalConfig.keyLocation
    }
  };
}
