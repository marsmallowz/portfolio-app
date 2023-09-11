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
        <main className="bg-slate-100 dark:bg-slate-800">
          <div className="flex flex-col min-h-screen mx-auto sm:max-w-lg px-2 md:px-5 bg-slate-200 dark:bg-slate-700">
            <Navbar />
            <div className="flex-grow p-2">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
