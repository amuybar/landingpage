
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useReportWebVitals } from 'next/web-vitals';
import { WebVitals } from '@/components/WebVitals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KQAirline - Fly with Us!',
  description: 'Welcome to KQAirline, the best way to fly!',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}