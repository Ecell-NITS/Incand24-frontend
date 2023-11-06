import "./globals.scss";
import { Inter } from "next/font/google";
import connectToDb from "@/lib/db";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Home",
  description: "Next JS Template",
  manifest: "/manifest.webmanifest",
};

connectToDb();

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
