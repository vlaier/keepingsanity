import '../globals.css';
export const metadata = {
  title: 'Sanity Studio',
  description: 'CMS for keepingsanity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
