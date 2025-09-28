import React from 'react';

export default function PaymentPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Payment, Cancellation & Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              All payments for VATALIQUE services are processed securely through our payment partners. By making a payment, you agree to these terms and conditions.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Payments are due in advance for all services</li>
              <li>We accept major credit cards, debit cards, and bank transfers</li>
              <li>All prices are in USD unless otherwise specified</li>
              <li>Taxes may apply based on your location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing and Invoicing</h2>
            <p className="text-gray-600 mb-4">
              Our billing process includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Monthly or annual billing cycles as selected</li>
              <li>Automatic renewal unless cancelled</li>
              <li>Email notifications before charges</li>
              <li>Detailed invoices available in your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancellation Policy</h2>
            <p className="text-gray-600 mb-4">
              You may cancel your subscription at any time through your account dashboard or by contacting support. Cancellation terms:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Monthly subscriptions: Cancel anytime before the next billing cycle</li>
              <li>Annual subscriptions: Cancel within 30 days for full refund</li>
              <li>Service access continues until the end of the current billing period</li>
              <li>No cancellation fees apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Policy</h2>
            <p className="text-gray-600 mb-4">
              We offer refunds under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>30-day money-back guarantee for new customers</li>
              <li>Refunds for technical issues we cannot resolve</li>
              <li>Pro-rated refunds for unused portions of annual subscriptions</li>
              <li>Refunds processed within 5-10 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Items</h2>
            <p className="text-gray-600 mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Custom development work already completed</li>
              <li>Third-party integrations or services</li>
              <li>Training sessions already conducted</li>
              <li>Setup fees for custom configurations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
            <p className="text-gray-600 mb-4">
              We accept the following payment methods:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Credit Cards: Visa, MasterCard, American Express</li>
              <li>Debit Cards with major network logos</li>
              <li>Bank Transfers (for enterprise customers)</li>
              <li>Digital Wallets: PayPal, Apple Pay, Google Pay</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Failed Payments</h2>
            <p className="text-gray-600 mb-4">
              If a payment fails:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>We will attempt to retry the payment automatically</li>
              <li>You will receive email notifications about failed payments</li>
              <li>Service may be suspended after 3 failed attempts</li>
              <li>Account reactivation requires successful payment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Price Changes</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to change our pricing with 30 days&apos; notice. Existing customers will be notified of any price changes and can choose to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Continue with the new pricing</li>
              <li>Cancel their subscription</li>
              <li>Downgrade to a lower tier if available</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disputes and Chargebacks</h2>
            <p className="text-gray-600 mb-4">
              If you dispute a charge or initiate a chargeback:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Contact us first to resolve the issue</li>
              <li>We will investigate and respond within 5 business days</li>
              <li>Unresolved disputes may result in account suspension</li>
              <li>Fraudulent chargebacks may result in permanent account closure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For payment-related questions or issues, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: billing@vatalique.com</li>
              <li>Phone: 1-800-VATALIQUE</li>
              <li>Support Portal: Available 24/7 in your account</li>
            </ul>
          </section>

          <div className="text-sm text-gray-500 mt-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
