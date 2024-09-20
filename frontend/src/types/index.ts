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

export interface ContextProps {
  products: ProductType[] | null | undefined
  product: ProductType | null | undefined
  numberOfLikes: number | undefined
  isLiked: boolean | undefined
  isBuyModalOpen: boolean | undefined
  handleLikes: (item: number, id: number) => void
  handleDeleteProduct: (id: number) => void
  handleBuy: (id: number) => void
  handleCloseProductDetails: (id: number) => void
  handleModalBuy: (id: number) => void
}
