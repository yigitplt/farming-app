"use client";

import type { Metadata } from "next";
import "./globals.css";
import { BalanceContext } from "@/contexts/BalanceContext";
import { useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [balance, setBalance] = useState(100);
  const [papatyaCount, setPapatyaCount] = useState(0);
  const [laleCount, setLaleCount] = useState(0);

  function updateBalance(amount: number) {
    setBalance(prev => prev + amount);
  }

  function updatePapatyaCount(amount: number) {
    setPapatyaCount(prev => prev + amount);
  }

  function updateLaleCount(amount: number) {
    setLaleCount(prev => prev + amount);
  }


  return (
    <html lang="en">
      <body>
        <BalanceContext.Provider
          value={{
            balance,
            updateBalance,
            papatyaCount,
            updatePapatyaCount,
            laleCount,
            updateLaleCount,
          }}
        >
          {children}
        </BalanceContext.Provider>

      </body>
    </html>
  );
}