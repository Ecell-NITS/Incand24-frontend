"use client"

import "./globals.scss";
import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
// import connectToDb from "@/lib/db";
import Loading from "./loading";
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
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          handleLoad();
        }
      });
    }

    return () => {
      document.removeEventListener('readystatechange', handleLoad);
    };
  }, []);
  

  return (
    <html lang="en">
      <body className={inter.className}>
        {
        loading? (<Loading/>):(
        <ContProvider>
          <QueryProvider>
            {/* <Social /> */}
            {children}
          </QueryProvider>
        </ContProvider>
          )
        }
      </body>
    </html>
  );
};

export default RootLayout;
