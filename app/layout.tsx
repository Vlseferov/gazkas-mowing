import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GAZKAS — Покос травы на сложных участках',
  description:
    'Профессиональный покос травы на сложных участках: склоны, откосы, обочины, промышленные и частные территории.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
