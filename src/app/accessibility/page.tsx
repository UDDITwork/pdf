import React from 'react';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Accessibility Commitment</h2>
            <p className="text-gray-600 mb-4">
              VATALIQUE is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Standards</h2>
            <p className="text-gray-600 mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our efforts include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Providing alternative text for images and visual content</li>
              <li>Ensuring proper heading structure and navigation</li>
              <li>Maintaining sufficient color contrast ratios</li>
              <li>Supporting keyboard navigation and screen readers</li>
              <li>Providing clear and descriptive link text</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
            <p className="text-gray-600 mb-4">
              Our website includes several accessibility features:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode options</li>
              <li>Text size adjustment capabilities</li>
              <li>Focus indicators for interactive elements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assistive Technologies</h2>
            <p className="text-gray-600 mb-4">
              We support various assistive technologies including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Voice recognition software</li>
              <li>Switch navigation devices</li>
              <li>Magnification software</li>
              <li>Alternative input devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ongoing Improvements</h2>
            <p className="text-gray-600 mb-4">
              We regularly review and improve our accessibility by:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Conducting accessibility audits</li>
              <li>Testing with users with disabilities</li>
              <li>Training our development team on accessibility best practices</li>
              <li>Monitoring and addressing accessibility feedback</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback and Support</h2>
            <p className="text-gray-600 mb-4">
              We welcome your feedback on the accessibility of VATALIQUE. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: accessibility@vatalique.com</li>
              <li>Phone: 1-800-VATALIQUE</li>
              <li>Online feedback form available on our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Alternative Formats</h2>
            <p className="text-gray-600 mb-4">
              If you need information in an alternative format, please contact us and we will work with you to provide the information in a format that meets your needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Content</h2>
            <p className="text-gray-600 mb-4">
              Some content on our website may be provided by third parties. While we strive to ensure all content meets accessibility standards, we cannot guarantee the accessibility of third-party content.
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
