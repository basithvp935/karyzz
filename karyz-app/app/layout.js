import { Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Karyz — One calm workspace for every team',
  description: 'Karyz brings projects, customers and reporting into one place, so your team spends less time switching tools and more time finishing work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
