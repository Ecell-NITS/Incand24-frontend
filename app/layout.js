import "./globals.scss";
import localFont from "next/font/local";
import connectToDb from "@/lib/db";
import QueryProvider from "./QueryProvider";
import ContProvider from "./ContextProvider";

const BastianRichardo = localFont({ src: "./Bastian_Richardo.otf" });

export const metadata = {
  title: " Incandescence 2024",
  description: "Incand 2024 website",
};

connectToDb();

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={BastianRichardo.className}>
        <ContProvider>
          <QueryProvider>{children}</QueryProvider>
        </ContProvider>
      </body>
    </html>
  );
};

export default RootLayout;
