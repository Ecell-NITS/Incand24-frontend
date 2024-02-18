"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (typeof window !== "undefined") {
    console.log(pathname);
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (pathname === "/prom") {
        router.replace("/events/4");
      }
    }
  }, [router, pathname]);
  return <div>Loading...</div>;
};

export default Page;
