import { BalanceContext } from "@/contexts/BalanceContext";
import styles from './Field.module.css';

export default function Field({children, balance, updateBalance, papatyaCount, updatePapatyaCount}) {
    return(
        <>
        <p>Balance: {balance}</p>
        <div className={styles.field}>
            <BalanceContext.Provider value={{ balance, updateBalance, papatyaCount, updatePapatyaCount }}>
                {children}
            </BalanceContext.Provider>
        </div>  
        </>
    )
}