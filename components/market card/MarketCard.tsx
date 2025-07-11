"use client";

import { BalanceContext } from "@/contexts/BalanceContext";

import { useContext, useState } from "react";

export default function MarketCard(){

    const {balance, updateBalance, papatyaCount, updatePapatyaCount} = useContext(BalanceContext);
    const [bought, setBought] = useState(0);

    function handleBuy() {
        const cost = bought * 10;
        if (bought === 0) return; // nothing to buy
        if (balance < cost) {
            alert("Not enough balance!");
        return;
    }   

    updateBalance(-cost); 
    updatePapatyaCount(bought); 
    setBought(0);
    }   


    
    return(
        <>
            <p>Papatya</p> <br />
            <p>$10.00</p> <br />
            <div>
                <button onClick={() => setBought(prev => (prev > 0 ? prev - 1 : 0))}>-</button>
                {bought}
                <button onClick={() => setBought(prev => prev + 1)}>+</button>
            </div> <br />
            <button onClick={handleBuy}>Buy seed</button>
            <p>Stock: {papatyaCount}</p>

        </>
    );
}