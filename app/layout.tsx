import './globals.css'
import type { Metadata } from 'next';
import localFont from '@next/font/local';

const epilogue = localFont({
  src: '../public/fonts/Epilogue-Medium.ttf',
  weight: '400',
  variable: '--font-epilogue',
  display: 'swap',
});

export const metadata: Metadata = {
	title: {
    default: "Kian Ristori",
    template: "%s | Kian Ristori"
  },
	description: 'Developer and creator.',
  openGraph: {
    title: 'Kian Ristori',
    description: 'Developer and creator.',
    url: 'https://kianristori.dev',
    siteName: 'Kian Ristori',
    images: [
      {
        url: 'https://kianristori.dev/og.webp',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'aHtCrqNgsVHAh51tai7mHTkKsLaVum2evoEwfhpOdc0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={epilogue.variable}>
      <body className="w-full bg-[#111010] antialiased text-white">
        <div className="mx-auto max-w-2xl selection:bg-violet-300 selection:text-black">
          {children}
        </div>
      </body>
    </html>
  )
}
