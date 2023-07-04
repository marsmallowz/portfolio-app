import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Alsandy Maulana",
  description: "Developer, writer, and creator",
  openGraph: {
    title: "Alsandy Maulana",
    description: "Developer, writer, and creator.",
    url: "https://alsandymaulana.com",
    siteName: "Alsandy Maulana",
    locale: "id",
    type: "website",
  },
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
