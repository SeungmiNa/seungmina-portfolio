import HomePage from "@/components/Pages/HomePage";
import { Metadata } from 'next';

export default function Home() {
  return (
    <HomePage />
  );
}

export const metadata: Metadata = {
  title: 'Seungmi Na Portfolio',
  description: 'Portfolio website of Seungmi Na',
  icons: {
    icon: '/s-favicon.ico',
  },
}
