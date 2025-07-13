"use client";

import { BalanceContext } from "@/contexts/BalanceContext";
import { useContext, useState } from "react";
import styles from "./MarketCard.module.css"; 

export default function MarketCard() {
  const { balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount } = useContext(BalanceContext);
  const [bought, setBought] = useState(0);
  const [laleBought, setLaleBought] = useState(0);

  function handlePapatyaBuy() {
    const cost = bought * 10;
    if (bought === 0) return;
    if (balance < cost) {
      alert("Not enough balance!");
      return;
    }

    updateBalance(-cost);
    updatePapatyaCount(bought);
    setBought(0);
  }

  function handleLaleBuy() {
    const laleCost = laleBought * 20;
    if (laleBought === 0) return;
    if (balance < laleCost) {
      alert("Not enough balance!");
      return;
    }

    updateBalance(-laleCost);
    updateLaleCount(laleBought);
    setLaleBought(0);
  }

  return (
    <>
      <div className={styles.marketCard}>
        <p>Papatya</p> <br />
        <p>$10.00</p> <br />
        <div>
          <button onClick={() => setBought(prev => (prev > 0 ? prev - 1 : 0))}>-</button>
          {bought}
          <button onClick={() => setBought(prev => prev + 1)}>+</button>
        </div>{" "}
        <br />
        <button onClick={handlePapatyaBuy}>Buy seed</button>
        <p>Stock: {papatyaCount}</p>
      </div>

      <div className={styles.marketCard}>
        <p>Lale</p> <br />
        <p>$20.00</p> <br />
        <div>
          <button onClick={() => setLaleBought(prev => (prev > 0 ? prev - 1 : 0))}>-</button>
          {laleBought}  
          <button onClick={() => setLaleBought(prev => prev + 1)}>+</button>
        </div>{" "}
        <br />
        <button onClick={handleLaleBuy}>Buy seed</button>
        <p>Stock: {laleCount}</p>
      </div>
    </>
  );
}
