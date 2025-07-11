import { BalanceContext } from "@/contexts/BalanceContext";
import styles from './Field.module.css';

export default function Field({children, balance, setBalance}){
    return(
        <>
        <p>Balance: {balance}</p>
        <div className={styles.field}>
            <BalanceContext value={{ balance, setBalance }}>
                {children}
            </BalanceContext>
        </div>
        </>
    )
}