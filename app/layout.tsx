import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modals/Modal';
import './globals.css';
import RegisterModal from './components/Modals/RegisterModal';
import ToastProvider from './providers/ToasterProvider';
import ToasterProvider from './providers/ToasterProvider';

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
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
