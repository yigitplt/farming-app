"use client";

import Card from "@/components/card/Card";
import Field from "@/components/field/Field";
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./Game.module.css";

export default function Page() {
  const router = useRouter();
  const {
    balance,
    updateBalance,
    papatyaCount,
    updatePapatyaCount,
    laleCount,
    updateLaleCount,
  } = useContext(BalanceContext);

  return (
    <div className={styles.gameContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Farm</h1>
        <div className={styles.statsContainer}>
          <div className={styles.balanceDisplay}>
            <span>Balance: </span>
            <span>${balance}</span>
          </div>
          <div className={styles.flowerCountDisplay}>
            <span>Papatya: </span>
            <span>{papatyaCount}</span>
          </div>
          <div className={styles.flowerCountDisplay}>
            <span>Lale: </span>
            <span>{laleCount}</span>
          </div>
        </div>
        <button
          onClick={() => router.push("/store")}
          className={styles.storeButton}
        >
          Store
        </button>
      </header>

      <main>
        <Field
          balance={balance}
          updateBalance={updateBalance}
          papatyaCount={papatyaCount}
          updatePapatyaCount={updatePapatyaCount}
          laleCount={laleCount}
          updateLaleCount={updateLaleCount}
        >
          
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Field>
      </main>
    </div>
  );
}