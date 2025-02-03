import Navbar from "@/components/Navbar";
import { Courgette, Inter } from 'next/font/google';
import "../styles/globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const courgette = Courgette({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-courgette',
});

export const metadata: Metadata = {
  title: 'Seungmi Na Portfolio',
  description: 'Seungmi Na',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${courgette.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
