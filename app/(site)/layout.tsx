import '../globals.css';
import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'Personal website of Piotr Zieliński',
  description: 'Personal portfolio website and blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {children}
      </body>
    </html>
  );
}
