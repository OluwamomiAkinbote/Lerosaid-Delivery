import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Lerosaid Logistics | Top-Rated Courier & Delivery Services in Warri, Delta',
    template: '%s | Lerosaid Logistics - Your Trusted Delivery Partner'
  },
  description: 'Lerosaid Logistics provides professional, same-day delivery services in Warri and across Delta State. Fast, secure, and affordable package delivery for businesses and individuals.',
  keywords: [
    'logistics company Warri',
    'Delta State courier services',
    'same-day delivery Warri',
    'reliable package delivery',
    'Lerosaid Logistics Nigeria',
    'express parcel service',
    'local delivery company',
    'business logistics solutions',
    'e-commerce delivery partner',
    'secure package handling'
  ],
  authors: [{ name: 'Lerosaid Logistics', url: 'https://www.lerosaid.com' }],
  metadataBase: new URL('https://www.lerosaid.com'),

  openGraph: {
    title: 'Lerosaid Logistics | Premium Delivery Services in Warri & Delta State',
    description: 'Trusted courier and logistics services with real-time tracking. Serving businesses and individuals across Warri and Delta State with fast, reliable delivery.',
    url: 'https://www.lerosaid.com/',
    siteName: 'Lerosaid Logistics',
    images: [
      {
        url: 'https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/lerosaid-favicon.png',
        width: 1200,
        height: 630,
        alt: 'Lerosaid Logistics - Professional Delivery Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lerosaid Logistics - Your Reliable Delivery Partner',
    site: '@lerosaid', 
    description: 'Fast, secure, and affordable delivery services in Warri and Delta State. Business logistics solutions with real-time tracking.',
    images: ['https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/lerosaid-favicon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-poppins min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}