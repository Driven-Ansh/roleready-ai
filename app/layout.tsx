import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RoleReady AI — Job-Specific Readiness Platform',
  description:
    'AI-powered career intelligence that analyzes your skills against any job posting. Get gap analysis, personalized roadmaps, interview prep, and ATS optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
