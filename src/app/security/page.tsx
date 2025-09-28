import React from 'react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Security Commitment</h2>
            <p className="text-gray-600 mb-4">
              At VATALIQUE, we take security seriously. We implement industry-standard security measures to protect your data and ensure the confidentiality, integrity, and availability of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We protect your data through:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>End-to-end encryption for data transmission</li>
              <li>Encryption at rest for stored data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure data centers with physical security measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Infrastructure Security</h2>
            <p className="text-gray-600 mb-4">
              Our infrastructure is designed with security in mind:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Multi-layered network security</li>
              <li>Firewall protection and intrusion detection</li>
              <li>Regular security updates and patches</li>
              <li>24/7 monitoring and incident response</li>
              <li>Backup and disaster recovery procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compliance and Certifications</h2>
            <p className="text-gray-600 mb-4">
              We maintain compliance with industry standards and regulations:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>GDPR compliance for data protection</li>
              <li>SOC 2 Type II certification</li>
              <li>ISO 27001 information security management</li>
              <li>Regular third-party security assessments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Incident Response</h2>
            <p className="text-gray-600 mb-4">
              In the event of a security incident, we have established procedures to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Immediately assess and contain the threat</li>
              <li>Notify affected users within 72 hours</li>
              <li>Work with law enforcement when necessary</li>
              <li>Conduct post-incident analysis and improvements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reporting Security Issues</h2>
            <p className="text-gray-600 mb-4">
              If you discover a security vulnerability, please report it to security@vatalique.com. We appreciate responsible disclosure and will work with you to address any issues promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Security Team</h2>
            <p className="text-gray-600 mb-4">
              For security-related questions or concerns, please contact us at security@vatalique.com
            </p>
          </section>

          <div className="text-sm text-gray-500 mt-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
