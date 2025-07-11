"use client";

import {createContext} from 'react';

export const BalanceContext = createContext({
  balance: 100,
  setBalance: (balance: number) => {},
});