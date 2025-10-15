import Navbar from "@/components/Navbar";
import { Courgette, Inter } from 'next/font/google';
import "../styles/globals.css";
import { Metadata } from 'next';
import { withBasePath } from "@/utils/paths";
import { GoogleAnalytics, isGA4Configured } from "@/lib/analytics";
import PageViewTracker from "@/components/Analytics/PageViewTracker";
import ScrollDepthTracker from "@/components/Analytics/ScrollDepthTracker";
import PageTimeTracker from "@/components/Analytics/PageTimeTracker";

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
    icon: withBasePath('/favicon.ico'),
    shortcut: withBasePath('/favicon.ico'),
    apple: withBasePath('/favicon.ico'),
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
        {isGA4Configured() && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />}
        <PageViewTracker />
        <ScrollDepthTracker />
        <PageTimeTracker />
      </body>
    </html>
  );
}
