
import styles from './Market.module.css';
import { useContext } from "react";
import { BalanceContext } from "@/contexts/BalanceContext";

export default function Market({children, balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount}) {


    return(
        <>
        <div className={styles.field}>
            <BalanceContext.Provider value={{balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount}}>
                {children}
            </BalanceContext.Provider>
        </div> 
        <p>Balance: {balance}</p> 
        </>
    )
}