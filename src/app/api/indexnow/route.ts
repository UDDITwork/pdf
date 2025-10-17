/**
 * IndexNow API Route for VATALIQUE
 * Handles server-side URL submissions to search engines
 */

import { NextRequest, NextResponse } from 'next/server';
import { submitUrls, submitAllImportantPages, checkIndexNowStatus } from '@/lib/indexnow';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, urls, config } = body;

    switch (action) {
      case 'submit-urls':
        if (!urls || !Array.isArray(urls)) {
          return NextResponse.json(
            { error: 'URLs array is required' },
            { status: 400 }
          );
        }
        
        const result = await submitUrls(urls, config);
        return NextResponse.json(result);

      case 'submit-all-pages':
        const allPagesResult = await submitAllImportantPages(config);
        return NextResponse.json(allPagesResult);

      case 'check-status':
        const status = await checkIndexNowStatus(config);
        return NextResponse.json(status);

      default:
        return NextResponse.json(
          { error: 'Invalid action. Supported actions: submit-urls, submit-all-pages, check-status' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const status = await checkIndexNowStatus();
    return NextResponse.json(status);
  } catch (error) {
    console.error('IndexNow status check error:', error);
    return NextResponse.json(
      { error: 'Failed to check IndexNow status' },
      { status: 500 }
    );
  }
}
