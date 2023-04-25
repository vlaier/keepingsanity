import '../../globals.css';
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({ subsets: ['latin'] });
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
      <body
        className={`bg-slate-900 text-gray-50 border-5 min-h-screen relative ${openSans.className}`}
      >
        <main className="px-2 md:px-20 xl:px-40 mx-auto w-full py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
