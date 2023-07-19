import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

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
        <main className="flex flex-col max-w-screen min-h-screen mx-auto sm:max-w-md ">
          <Navbar />
          <div className="flex-grow p-2">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
