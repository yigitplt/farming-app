import { BalanceContext } from "@/contexts/BalanceContext";
import styles from './Field.module.css';

export default function Field({children, balance, updateBalance}){
    return(
        <>
        <p>Balance: {balance}</p>
        <div className={styles.field}>
            <BalanceContext.Provider value={{ balance, updateBalance }}>
                {children}
            </BalanceContext.Provider>
        </div>  
        </>
    )
}