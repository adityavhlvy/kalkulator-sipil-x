import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        {/* Tambahkan Navbar di sini */}
        <Navbar />

        {/* Konten utama */}
        <main className="h-full w-full">
          {children}
        </main>

        {/* Tambahkan Footer di sini */}
        <Footer />
      </body>
    </html>
  );
}