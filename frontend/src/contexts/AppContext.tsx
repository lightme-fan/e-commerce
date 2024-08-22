import { createContext, FC, useEffect, useState } from "react";
import { ContextProps, ContextProviderProps } from "../types";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000"

const GeneralContext = createContext<ContextProps | null>(null);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<ContextProps | null>({ products: [] });

  const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    setState(prev => ({...prev, products: response?.data?.products}))
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <GeneralContext.Provider value={state}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContext, ContextProvider };