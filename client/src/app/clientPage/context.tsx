
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cartLength: number;
  setCartLength: (length: number) => void;
  cartIds: number[]; // Array of cart item IDs
  setCartIds: (ids: number[]) => void;
  totalAmount: number; // Total amount
  setTotalAmount: (amount: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartLength, setCartLength] = useState<number>(0);
  const [cartIds, setCartIds] = useState<number[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  return (
    <CartContext.Provider value={{ cartLength, setCartLength, cartIds, setCartIds, totalAmount, setTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
