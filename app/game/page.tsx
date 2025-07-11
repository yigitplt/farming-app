"use client";

import Card from "@/components/card/Card";
import Field from "@/components/field/Field";
import { useState } from "react";

export default function Page() {
    const [balance, setBalance] = useState(100);

    function handleBalanceChange(amount: number) {
        setBalance(prevBalance => prevBalance + amount);
    }

    return(
        <>
        
        <Field balance={balance} updateBalance={handleBalanceChange}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Field>
        <button>Exit</button>
        </>
    )
}