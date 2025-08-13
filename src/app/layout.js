import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';





export const metadata = {
  title: {
    default: 'Lerosaid Logistics | Reliable Delivery in Warri, Delta State',
    template: '%s | Lerosaid Logistics'
  },
  description: 'Lerosaid Logistics offers fast, reliable, and affordable delivery services in Warri and Delta State. Your packages, our priority.',
  keywords: ['logistics in Warri', 'Delta State delivery service', 'courier in Warri', 'package delivery', 'Lerosaid Logistics'],
  authors: [{ name: 'Lerosaid Logistics', url: 'https://www.lerosaid.com' }],
  metadataBase: new URL('https://www.lerosaid.com'),

  openGraph: {
    title: 'Lerosaid Logistics | Reliable Delivery in Warri, Delta State',
    description: 'Fast and reliable logistics services in Warri and Delta State. Your packages, our priority.',
    url: 'https://www.lerosaid.com/',
    siteName: 'Lerosaid Logistics',
    images: [
      {
        url: 'https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/lerosaid-favicon.png', // change to your OG image path
        width: 1200,
        height: 630,
        alt: 'Lerosaid Logistics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lerosaid Logistics',
    site: '@lerosaid', 
    description: 'Fast and reliable logistics services in Warri and Delta State.',
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
      <body className="min-h-screen bg-gray-900 font-poppins">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

