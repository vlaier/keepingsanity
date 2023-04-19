import './globals.css';

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
      <body> {children}</body>
    </html>
  );
}
