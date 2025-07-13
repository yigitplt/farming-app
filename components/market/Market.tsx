
import styles from './Market.module.css';
import { useContext } from "react";
import { BalanceContext } from "@/contexts/BalanceContext";

export default function Market({children, balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount}) {


    return(
        <>
        <div className={styles.marketContainer}>
            <BalanceContext.Provider value={{balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount}}>
                {children}
            </BalanceContext.Provider>
            <br />
            <p>Balance: {balance}</p> 
        </div> 
        
        
        </>
    )
}