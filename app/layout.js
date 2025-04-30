import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartSpend",
  description: "Smarter Spending Starts Here",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />

        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors/>
        { /* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-700">
            <p>© 2025 SmartSpend. All rights reserved by Shiv.</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
