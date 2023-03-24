import '@/styles/globals.css';

export const metadata = {
  title: 'Shreyansh Dubey',
  description: `I'm a data enthusiast who loves tackling problems by looking at them from multiple angles. Whether it's writing code or living my life, I strive to keep things simple yet intuitive. When I'm not working, you can find me tending to my in-house garden or hitting the open road. And speaking of roads, I'm passionate about promoting road safety and working towards making our streets safer for everyone.`
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
