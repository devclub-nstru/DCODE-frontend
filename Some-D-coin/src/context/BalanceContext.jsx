import { createContext, useState, useContext } from "react";
import axiosInstance from "../utils/axiosConfig";

const BalanceContext = createContext();

export function BalanceProvider({ children }) {
  const [userBalance, setUserBalance] = useState(null);
  const [userData, updateUserDetails] = useState({});
  var refreshUserdata = async () => {
    var { data: axres } = await axiosInstance.get("/api/user/details");
    if (axres.status) {
      // console.log(axres.user);
      updateUserDetails(axres.user);
    }
  };
  const updateBalance = async () => {
    var { data: axres } = await axiosInstance.get("/api/wallet/balance");
    if (axres.status) {
      setUserBalance(axres?.balance);
    }
  };

  return (
    <BalanceContext.Provider
      value={{ userBalance, updateBalance, userData, refreshUserdata }}
    >
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

export function useAccount() {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useAccount must be used within a BalanceProvider");
  }
  return context;
}
