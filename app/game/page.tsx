"use client";

import Card from "@/components/card/Card";
import Field from "@/components/field/Field";
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";
import { use, useContext, useState } from "react";

export default function Page() {

    const router = useRouter();
    const {balance, updateBalance, papatyaCount, updatePapatyaCount, laleCount, updateLaleCount} = useContext(BalanceContext);

    return(
        <>
        
        <Field balance={balance} updateBalance={updateBalance} papatyaCount={papatyaCount} updatePapatyaCount={updatePapatyaCount} laleCount={laleCount} updateLaleCount={updateLaleCount}>
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
        <button onClick={() => router.push("/store")}>Store</button>
        </>
    )
}