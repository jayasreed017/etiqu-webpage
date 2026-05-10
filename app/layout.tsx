import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://etiqu.com'),
  title: 'ETIQU | Developing Tomorrow\'s Business Owners',
  description: 'ETIQU is a premier institution dedicated to accelerating professional trajectories and developing the next generation of business owners through our comprehensive Entrepreneurship Program.',
  openGraph: {
    title: 'ETIQU | Developing Tomorrow\'s Business Owners',
    description: 'A legacy of excellence in professional development and entrepreneurship.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
