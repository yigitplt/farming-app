"use client";

import MarketCard from "@/components/market card/MarketCard";
import Market from "@/components/market/Market";
import { BalanceContext } from "@/contexts/BalanceContext";
import { useContext } from "react";

export default function Page() {

    const { balance, updateBalance, papatyaCount, updatePapatyaCount  } = useContext(BalanceContext);

    return(
        <Market balance={balance} updateBalance={updateBalance} papatyaCount={papatyaCount} updatePapatyaCount={updatePapatyaCount}>
             <MarketCard/>   
        </Market>
    )
}