import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio Alsandy Maulana",
  description: "Web portfolio Alsandy Maulana yang dibuat menggunakan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col p-2  max-w-md mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
