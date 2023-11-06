"use client";

// error files are always client-side only
import { useEffect } from "react";

const GlobalError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  });

  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
