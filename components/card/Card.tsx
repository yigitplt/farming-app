"use client";

import { useContext, useState } from 'react';
import styles from './Card.module.css';
import { BalanceContext } from '@/contexts/BalanceContext';

export default function Card() {
    const [currentPlantType, setCurrentPlantType] = useState(null);
    const [plant, setPlant] = useState(0);
    const {balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount} = useContext(BalanceContext);
    const [intervalId, setIntervalId] = useState(null);   

    function handleClick() {
        
        

        if (plant === 5 || plant === 4) {
            setPlant(0);
            clearInterval(intervalId);

            if (currentPlantType === "papatya") {
                updateBalance(20);
            } else if (currentPlantType === "lale") {
                updateBalance(40);
            }
            setCurrentPlantType(null);
            return;
        }

        
        if (plant >= 6) {
            setPlant(0);
            clearInterval(intervalId);
            setCurrentPlantType(null);
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
        setCurrentPlantType("papatya");

        } else if (choice === "lale") {
            if (laleCount <= 0) {
            alert("You don't have enough lale seeds!");
            return;
            }
            updateLaleCount(-1);
            setCurrentPlantType("lale");

        } else {
            alert("Invalid choice! Please type 'papatya' or 'lale'.");
            return;
  }


        
        setPlant(1);
        const newIntervalId = setInterval(() => {
            setPlant((prevPlant) => prevPlant + 1);
        }, 2000);
        setIntervalId(newIntervalId);

        
        
    }


    function showPlant(){

        switch(plant) {
            case 0:
                return null;
            case 1:
                return <img src={"/images/Seeding.png"} alt="seed" className={styles.plantImage} />;
            case 2:
                return <img src={"/images/LittlePlant.png"} alt="little" className={styles.plantImage} />;
            case 3:
                return <img src={"/images/MiddlePlant.png"} alt="middle" className={styles.plantImage} />;
            case 4:
                if (currentPlantType === "papatya") {
                    return <img src={"/images/Daisy.png"} alt="papatya" className={styles.plantImage} />;
                } else if (currentPlantType === "lale") {
                    return <img src={"/images/Tulip.png"} alt="lale" className={styles.plantImage} />;
                }
            case 5:
                if (currentPlantType === "papatya") {
                    return <img src={"/images/Daisy.png"} alt="papatya" className={styles.plantImage} />;
                } else if (currentPlantType === "lale") {
                    return <img src={"/images/Tulip.png"} alt="lale" className={styles.plantImage} />;
                }
            case 6:
                if (currentPlantType === "papatya") {
                    return <img src={"/images/DriedDaisy.png"} alt="papatya" className={styles.plantImage} />;
                } else if (currentPlantType === "lale") {
                    return <img src={"/images/DriedTulip.png"} alt="lale" className={styles.plantImage} />;
                }
            default:
                if (currentPlantType === "papatya") {
                    return <img src={"/images/DriedDaisy.png"} alt="papatya" className={styles.plantImage} />;
                } else if (currentPlantType === "lale") {
                    return <img src={"/images/DriedTulip.png"} alt="lale" className={styles.plantImage} />;
                }

            
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