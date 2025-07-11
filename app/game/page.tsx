"use client";

import Card from "@/components/card/Card";
import Field from "@/components/field/Field";

export default function Page() {

function handleBalanceChange(balance: number, amount: number) {
    balance = balance + amount
}

    return(
        <>
        
        <Field balance={100} setBalance={handleBalanceChange}>
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
        </>
    )
}