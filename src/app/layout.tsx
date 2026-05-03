import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Nader Al-Gammal — Lead Frontend Developer',
  description:
    'Portfolio and CV of Ahmed Nader Al-Gammal, Lead Frontend Developer with 10+ years of experience building enterprise web applications.',
  keywords: ['Frontend Developer', 'React', 'Vue', 'Lead Developer', 'Cairo', 'Egypt'],
  authors: [{ name: 'Ahmed Nader Al-Gammal' }],
  openGraph: {
    title: 'Ahmed Nader Al-Gammal — Lead Frontend Developer',
    description: 'Portfolio and CV of Ahmed Nader Al-Gammal',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
