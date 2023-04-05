import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modals/Modal';
import './globals.css';

export const metadata = {
  title: 'Airnbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal title="Hello World" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
