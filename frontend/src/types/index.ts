export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ProductType {
    description: string
    id: number
    is_recommended: number
    is_sold: number
    location: string
    name: string
    number_of_likes: number
    is_liked: boolean
    owner_address: string
    owner_email: string
    owner_name: string
    payment_method: any
    picture: string
    price: string
}

export interface ProductStateType {
  description: string | any
  name: string
  location: string
  username: string
  address: string
  email: string
  picture: string | null | any
  price: string
}

export interface ContextProps {
  products: ProductType[] | null | undefined
  product: ProductType | null | undefined
  productState: ProductStateType | null | undefined
  numberOfLikes: number | undefined
  isLiked: boolean | undefined
  isBuyModalOpen: boolean | undefined
  isAddProductModalOpen: boolean | undefined
  handleLikes: (item: number, id: number) => void
  handleDeleteProduct: (id: number) => void
  handleBuy: (id: number) => void
  handleCloseProductDetails: (id: number) => void
  handleModalBuy: (id: number) => void
  handleAddProduct: () => void
}


export interface InputProps {
  type: string
  id: string | undefined
  name: string
  label: string
  key: number | string | undefined | null
  value: number | string | boolean | any | null
  onChange: (event: any) => void
  style?: any
}