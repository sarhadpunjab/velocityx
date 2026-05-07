import type {Metadata} from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'VelocityX Gym',
  description: 'Website for VelocityX Gym, inspired by high-energy modern fitness centers.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} dark`}>
      <body className="bg-black text-white font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
