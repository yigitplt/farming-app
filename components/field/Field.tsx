import { BalanceContext } from "@/contexts/BalanceContext";
import styles from './Field.module.css';

export default function Field({children, balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount}) {
    return(
        <>
        <div className={styles.field}>
            <BalanceContext.Provider value={{ balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount} }>
                {children}
            </BalanceContext.Provider>
        </div>  
        </>
    )
}