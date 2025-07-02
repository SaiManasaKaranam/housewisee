import React, { createContext, useState } from "react";

export const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
  const [groceryItems, setGroceryItems] = useState([]);

  return (
    <GroceryContext.Provider value={{ groceryItems, setGroceryItems }}>
      {children}
    </GroceryContext.Provider>
  );
};
