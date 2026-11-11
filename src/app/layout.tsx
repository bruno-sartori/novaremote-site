import type { Metadata, Viewport } from 'next';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/500.css';
import './globals.css';

import { SITE } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name, url: SITE.author.url }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description },
};

export const viewport: Viewport = {
  themeColor: '#05070d',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
