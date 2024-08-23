import { createContext, FC, useEffect, useState } from "react";
import { ContextProps, ContextProviderProps } from "../types";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000"

const initialContextValue: ContextProps = {
  products: [],
  numberOfLikes: 0,
  handleLikes: () => {} 
};

const GeneralContext = createContext<ContextProps | null>(initialContextValue);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<ContextProps | null>(initialContextValue);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      setState(prevState => prevState && ({
        ...prevState,
        products: response?.data?.products || [],
      }));
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setState(prevState => prevState && ({
        ...prevState,
        products: [],
      }));
    }
  };

  const handleLikes = (number_of_likes: number) => {
    console.log("number_of_likes:::::::::", number_of_likes)
    setState(prev => prev && ({ ...prev, numberOfLikes: number_of_likes + 1 }));
  }

  useEffect(() => {
    getProducts();
  }, [])

  const contextValue = {
    products: state?.products,
    numberOfLikes: state?.numberOfLikes,
    handleLikes: handleLikes
  }

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContext, ContextProvider };