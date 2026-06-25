import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { AuthModalProvider } from "@/components/auth";
import { Footer } from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Active Service",
  description: "Active Service website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-surface">
        <AuthModalProvider>
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthModalProvider>
      </body>
    </html>
  );
}
