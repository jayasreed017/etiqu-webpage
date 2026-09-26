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
  metadataBase: new URL('https://etiqu.org'),

  title: 'ETIQU | Build Your Career with ETIQU',

  description:
    "ETIQU has flourished to being one of India's most unconventional, dynamic and spirited Marketing & Advertising Organization.",

  openGraph: {
    title: 'ETIQU | Build Your Career with ETIQU',

    description:
      'A legacy of excellence in professional development and entrepreneurship.',

    url: 'https://etiqu.org',

    siteName: 'ETIQU',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ETIQU | Build Your Career with ETIQU',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'ETIQU | Build Your Career with ETIQU',

    description:
      'A legacy of excellence in professional development and entrepreneurship.',

    images: ['/og-image.png'],
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
