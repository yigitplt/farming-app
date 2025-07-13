"use client";

import MarketCard from "@/components/market card/MarketCard";
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./Store.module.css"; 

export default function Page() {
  const router = useRouter();
  const { balance } = useContext(BalanceContext);

  return (
    <div className={styles.storeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Seed Store</h1>
        <div className={styles.balanceDisplay}>
          <span>Balance: ${balance}</span>
        </div>
        <button
          onClick={() => router.push("/game")}
          className={styles.backButton}
        >
          Back to Farm
        </button>
      </header>
      <div className={styles.cardContainer}>
        <MarketCard />
      </div>
    </div>
  );
}