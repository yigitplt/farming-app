"use client";

import {createContext} from 'react';

export const BalanceContext = createContext({    
  balance: 100,
  updateBalance: (amount: number) => {},
  papatyaCount: 0,
  updatePapatyaCount: (amount: number) => {},
});