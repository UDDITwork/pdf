import React from 'react';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Service Status</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Status</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-green-800 font-semibold">All Systems Operational</span>
              </div>
              <p className="text-green-700 mt-2">All VATALIQUE services are running normally.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Components</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Web Application</span>
                <span className="text-green-600 font-semibold">Operational</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">API Services</span>
                <span className="text-green-600 font-semibold">Operational</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Database</span>
                <span className="text-green-600 font-semibold">Operational</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Payment Processing</span>
                <span className="text-green-600 font-semibold">Operational</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Email Services</span>
                <span className="text-green-600 font-semibold">Operational</span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Incidents</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800">No recent incidents to report. All services have been running smoothly.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scheduled Maintenance</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-800">No scheduled maintenance at this time. We will provide advance notice for any planned maintenance windows.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-gray-600">Uptime (Last 30 days)</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">&lt;100ms</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">0</div>
                <div className="text-gray-600">Active Incidents</div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Status Updates</h2>
            <p className="text-gray-600 mb-4">
              We provide real-time status updates through multiple channels:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>This status page (updated every 5 minutes)</li>
              <li>Email notifications for subscribers</li>
              <li>Twitter updates @VATALIQUEStatus</li>
              <li>RSS feed for automated monitoring</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Updates</h2>
            <p className="text-gray-600 mb-4">
              Stay informed about service status and incidents by subscribing to our status updates.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
            <p className="text-gray-600 mb-4">
              If you're experiencing issues not reflected on this status page, please contact our support team:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: support@vatalique.com</li>
              <li>Phone: 1-800-VATALIQUE</li>
              <li>Live chat available on our website</li>
            </ul>
          </section>

          <div className="text-sm text-gray-500 mt-8">
            <p>Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
