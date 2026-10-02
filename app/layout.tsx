import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daniel Almeida | QA & Automação de Testes',
  description: 'Portfólio de Daniel Almeida, Analista de QA com automação em Playwright, Cypress e k6.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;800&family=JetBrains+Mono:wght@400;500&display=swap" />
        <noscript><style>{'.rv{opacity:1!important;transform:none!important}'}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
