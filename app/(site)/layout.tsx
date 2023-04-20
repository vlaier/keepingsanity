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
      <body className="bg-slate-900 text-gray-50 bg-[url('/blueLight.png')] bg-no-repeat bg-center">
        <Navbar />
        <main className="px-2 md:px-10 xl:px-20 mx-auto w-full ">
          {children}
        </main>
      </body>
    </html>
  );
}
