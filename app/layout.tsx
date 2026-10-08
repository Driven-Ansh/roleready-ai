import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RoleReady AI',
  description: 'Job-specific readiness platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-background text-textPrimary">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
