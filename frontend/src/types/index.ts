export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ProductType {
    description: String
    id: Number
    is_recommended: Number
    is_sold: Number
    location: String
    name: String
    number_of_likes: Number
    owner_address: String
    owner_email: String
    owner_name: String
    payment_method: any
    picture: String
    price: String
}

export interface ContextProps {
  products: ProductType[] | null | undefined
  numberOfLikes: number | undefined
  handleLikes: (item: number) => void
}
