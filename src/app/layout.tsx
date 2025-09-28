import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ada - AI Customer Service Platform',
  description: 'Turning AI Agents into your most effective CX employees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
