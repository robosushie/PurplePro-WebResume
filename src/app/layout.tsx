import '@/styles/globals.css';
import main_config from '@/content/main-config';

export const metadata = {
  title: main_config.title,
  description: main_config.description
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
