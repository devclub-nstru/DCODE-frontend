import { createContext, useState, useContext } from "react";
import axiosInstance from "../utils/axiosConfig";

const BalanceContext = createContext();

export function BalanceProvider({ children }) {
  const [userBalance, setUserBalance] = useState(null);

  const updateBalance = async () => {
    var { data: axres } = await axiosInstance.get("/api/wallet/balance");
    if (axres.status) {
      setUserBalance(axres?.balance);
    }
  };

  return (
    <BalanceContext.Provider value={{ userBalance, updateBalance }}>
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
}
