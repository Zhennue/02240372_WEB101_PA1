// context/MyContext.js
import { createContext, useState, useContext } from 'react';

// Create the Context
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  const [state, setState] = useState("Hello, world!");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to use the context
export function useMyContext() {
  return useContext(MyContext);
}
