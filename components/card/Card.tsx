"use client";

import { useContext, useState } from 'react';
import styles from './Card.module.css';
import { BalanceContext } from '@/contexts/BalanceContext';

export default function Card() {
    const [plant, setPlant] = useState(0);
    const {balance, setBalance} = useContext(BalanceContext);
    const [intervalId, setIntervalId] = useState(null);   

    function handleClick() {
        
        if(plant === 5 || plant === 4){
            setPlant(0);
            clearInterval(intervalId);
            return;
        }
        
        else if(plant >= 6){
            setPlant(0);
            return;
        }

        else{
            setBalance(balance - 10); 
            setPlant(1);
            const intervalId = setInterval(() => {setPlant((prevPlant) => prevPlant + 1)}, 2000);
            setIntervalId(intervalId);
        }

    }


    function showPlant(){
        switch(plant) {
            case 0:
                return null;
            case 1:
                return "T";
            case 2:
                return "F";
            case 3:
                return "B";
            case 4:
                return "Ç";
            case 5:
                return "Ç";
            case 6:
                return "K";
            default:
                return "K";
        }
    }

    return (
        <div 
            className={styles.card}
            onClick={handleClick}>
                {showPlant()}       
        </div>
    )
}