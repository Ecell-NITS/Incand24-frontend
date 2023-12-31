import "./globals.scss";
import { Inter } from "next/font/google";
// import connectToDb from "@/lib/db";
import QueryProvider from "./QueryProvider";
import ContProvider from "./ContextProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Incandescence 2024",
  description: "Incandescence 2024 Official Website",
  manifest: "/manifest.webmanifest",
};

// connectToDb();

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContProvider>
          <QueryProvider>
            {/* <Social /> */}
            {children}
          </QueryProvider>
        </ContProvider>
      </body>
    </html>
  );
};

export default RootLayout;
