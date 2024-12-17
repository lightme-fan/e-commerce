import { createContext, FC, useEffect, useState } from "react";
import { ContextProps, ContextProviderProps } from "../types";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000"

const initialContextValue: ContextProps = {
  products: [],
  product: null,
  productState: {
    picture: null,
    name: "",
    description: "",
    price: "",
    address: "",
    username: "",
    location: "",
    email: ""
  },
  numberOfLikes: 0,
  isLiked: false,
  isBuyModalOpen: false,
  isAddProductModalOpen: false,
  handleLikes: () => {},
  handleDeleteProduct: () => {},
  handleBuy: () => {},
  handleCloseProductDetails: () => {},
  handleModalBuy: () => {},
  handleAddProduct: () => {},
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
      setState(prevState => prevState && ({
        ...prevState,
        products: [],
      }));
    }
  };

  const handleLikes = async (number_of_likes: number, id: number) => {
    const updatedProducts = state?.products?.map(product => {
      let newNumberOfLikes = product?.number_of_likes;
      let isLiked = !product?.is_liked;
      if (product?.id === id) {
        if (isLiked) {          
          newNumberOfLikes = newNumberOfLikes + 1;
        } else {
          newNumberOfLikes = newNumberOfLikes - 1;
        }
      }
      
      return {
        ...product,
        number_of_likes: product?.id === id ? newNumberOfLikes : product?.number_of_likes,
        is_liked: product?.id === id ? isLiked : product?.is_liked
      }
    })
    // const res = await axios.get(`${API_URL}/product/${id}`);
    setState(prevState => prevState && ({...prevState, products: updatedProducts}));
  }

  const handleAddProduct = (product: any) => {
    let imageUrl = product?.picture && URL.createObjectURL(product?.picture);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      imageUrl = e.target.result;
    };
    
    reader.readAsDataURL(product?.picture);

    const productToAdd = {
      name: product?.name,
      description: product?.description,
      is_recommended: 0,
      is_sold: 0,
      location: product?.location,
      number_of_likes: 0,
      owner_address: product?.address,
      owner_email: product?.email,
      owner_name: product?.username,
      payment_method: null,
      picture: imageUrl,
      price: product?.price
    }

    console.log("productToAdd:::::", productToAdd);
  }

  const handleDeleteProduct = async (id: number) => {
    await axios.delete(`${API_URL}/product/${id}`);
    setState(prev => prev && ({
      ...prev,
      products: prev?.products?.filter(product => product?.id !== id)
    }))
  }

  const handleBuy = async (id: number) => {
    setState(prev => prev && ({
      ...prev,
      isBuyModalOpen: true
    }))
    const res = await axios.get(`${API_URL}/product/${id}`);
    
    setState(prev => prev && ({
      ...prev,
      product: res?.data
    }))
  }

  const handleCloseProductDetails = (id: number) => {
    setState(prev => prev && ({
      ...prev,
      isBuyModalOpen: false
    }))
  }

  const handleModalBuy = async (id: number) => {
    let updatedProduct = state?.products?.find(product => product?.id === id)
    updatedProduct = updatedProduct && {...updatedProduct, is_sold: id}

    await axios.put(`${API_URL}/product/${id}`, updatedProduct);
    
    setState(prev => prev && ({
      ...prev,
      isBuyModalOpen: false
    }))
    
  }

  useEffect(() => {
    getProducts();
  }, [])

  const contextValue = {
    products: state?.products,
    product: state?.product,
    productState: state?.productState,
    numberOfLikes: state?.numberOfLikes,
    isLiked: state?.isLiked,
    isBuyModalOpen: state?.isBuyModalOpen,
    isAddProductModalOpen: state?.isAddProductModalOpen,
    handleLikes: handleLikes,
    handleDeleteProduct: handleDeleteProduct,
    handleBuy: handleBuy,
    handleCloseProductDetails: handleCloseProductDetails,
    handleModalBuy: handleModalBuy,
    handleAddProduct: handleAddProduct,
  }

  if (!state) {
    // Handle the null case
    return null;
  }

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContext, ContextProvider };