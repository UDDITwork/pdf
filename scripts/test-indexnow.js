/**
 * Test script for IndexNow implementation
 * Run with: node scripts/test-indexnow.js
 */

const https = require('https');
const http = require('http');

const API_KEY = '54208d9a98894f6db0abb8b145953254';
const HOST = 'vatalique.com';
const KEY_FILE_URL = `https://${HOST}/54208d9a98894f6db0abb8b145953254.txt`;

// Test URLs for VATALIQUE
const TEST_URLS = [
  'https://vatalique.com/',
  'https://vatalique.com/services',
  'https://vatalique.com/about',
  'https://vatalique.com/contact'
];

async function checkKeyFile() {
  return new Promise((resolve) => {
    console.log('🔍 Checking API key file accessibility...');
    console.log(`📁 Key file URL: ${KEY_FILE_URL}`);
    
    const protocol = KEY_FILE_URL.startsWith('https') ? https : http;
    
    protocol.get(KEY_FILE_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const keyInFile = data.trim();
        console.log(`📄 Key file status: ${res.statusCode}`);
        console.log(`🔑 Key in file: ${keyInFile}`);
        
        if (res.statusCode === 200) {
          if (keyInFile === API_KEY) {
            console.log('✅ Key file is accessible and contains correct key');
            resolve(true);
          } else {
            console.log('❌ Key file contains incorrect key');
            resolve(false);
          }
        } else {
          console.log('❌ Key file is not accessible');
          resolve(false);
        }
      });
    }).on('error', (err) => {
      console.log('❌ Error accessing key file:', err.message);
      resolve(false);
    });
  });
}

async function testSingleUrlSubmission() {
  return new Promise((resolve) => {
    console.log('\n🚀 Testing single URL submission...');
    
    const testUrl = TEST_URLS[0];
    const encodedUrl = encodeURIComponent(testUrl);
    const encodedKey = encodeURIComponent(API_KEY);
    
    const bingUrl = `https://www.bing.com/indexnow?url=${encodedUrl}&key=${encodedKey}`;
    console.log(`📤 Submitting to: ${bingUrl}`);
    
    https.get(bingUrl, (res) => {
      console.log(`📊 Response status: ${res.statusCode}`);
      
      if (res.statusCode === 200) {
        console.log('✅ URL submitted successfully to Bing');
        resolve(true);
      } else if (res.statusCode === 202) {
        console.log('⏳ URL accepted, validation pending');
        resolve(true);
      } else {
        console.log(`❌ Submission failed with status: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log('❌ Error submitting URL:', err.message);
      resolve(false);
    });
  });
}

async function testBulkSubmission() {
  return new Promise((resolve) => {
    console.log('\n📦 Testing bulk URL submission...');
    
    const payload = JSON.stringify({
      host: HOST,
      key: API_KEY,
      urlList: TEST_URLS
    });
    
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    };
    
    console.log(`📤 Submitting ${TEST_URLS.length} URLs to IndexNow.org`);
    console.log('📋 URLs:', TEST_URLS.join(', '));
    
    const req = https.request(options, (res) => {
      console.log(`📊 Response status: ${res.statusCode}`);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Bulk submission successful');
          resolve(true);
        } else if (res.statusCode === 202) {
          console.log('⏳ Bulk submission accepted, validation pending');
          resolve(true);
        } else {
          console.log(`❌ Bulk submission failed with status: ${res.statusCode}`);
          if (data) {
            console.log('📄 Response:', data);
          }
          resolve(false);
        }
      });
    });
    
    req.on('error', (err) => {
      console.log('❌ Error in bulk submission:', err.message);
      resolve(false);
    });
    
    req.write(payload);
    req.end();
  });
}

async function runTests() {
  console.log('🧪 IndexNow Test Suite for VATALIQUE');
  console.log('=====================================\n');
  
  console.log(`🔑 API Key: ${API_KEY}`);
  console.log(`🌐 Host: ${HOST}`);
  console.log(`📁 Key Location: ${KEY_FILE_URL}\n`);
  
  // Test 1: Check key file accessibility
  const keyFileOk = await checkKeyFile();
  
  if (!keyFileOk) {
    console.log('\n❌ Key file test failed. Please ensure:');
    console.log('1. The website is deployed');
    console.log('2. The key file is accessible at the correct URL');
    console.log('3. The key file contains only the API key');
    return;
  }
  
  // Test 2: Single URL submission
  const singleUrlOk = await testSingleUrlSubmission();
  
  // Test 3: Bulk URL submission
  const bulkOk = await testBulkSubmission();
  
  console.log('\n📊 Test Results Summary:');
  console.log('========================');
  console.log(`Key File Access: ${keyFileOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Single URL: ${singleUrlOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Bulk Submission: ${bulkOk ? '✅ PASS' : '❌ FAIL'}`);
  
  if (keyFileOk && singleUrlOk && bulkOk) {
    console.log('\n🎉 All tests passed! IndexNow is properly configured.');
    console.log('🚀 Your website will now automatically notify search engines of content changes.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the configuration.');
  }
}

// Run the tests
runTests().catch(console.error);
