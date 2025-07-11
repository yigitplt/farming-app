"use client";

import { useContext, useState } from 'react';
import styles from './Card.module.css';
import { BalanceContext } from '@/contexts/BalanceContext';

export default function Card() {
    const [plant, setPlant] = useState(0);
    const {balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount} = useContext(BalanceContext);
    const [intervalId, setIntervalId] = useState(null);   

    function handleClick() {
        
        

        if (plant === 5 || plant === 4) {
            setPlant(0);
            clearInterval(intervalId);
            updateBalance(20);
            return;
        }

        
        if (plant >= 6) {
            setPlant(0);
            return;
        }

        
        if (plant > 0 && plant < 4) {
            return;
        }

        const choice = prompt("Which plant do you want to plant? (papatya / lale)");

        if (choice === "papatya") {
            if (papatyaCount <= 0) {
                alert("You don't have enough papatya seeds!");
                return;
        }
        updatePapatyaCount(-1);
        } else if (choice === "lale") {
            if (laleCount <= 0) {
            alert("You don't have enough lale seeds!");
            return;
            }
            updateLaleCount(-1);
        } else {
            alert("Invalid choice! Please type 'papatya' or 'lale'.");
            return;
  }


        
        setPlant(1);
        const newIntervalId = setInterval(() => {
            setPlant((prevPlant) => prevPlant + 1);
        }, 2000);
        setIntervalId(newIntervalId);

        
        updatePapatyaCount(-1);
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