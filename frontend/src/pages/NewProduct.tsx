import React, { Fragment, useState } from 'react'
import { Header } from '../components'
import { v4 as uuidv4 } from 'uuid';
import { capitalizeFirstLetter } from '../utils/utils';

const NewProduct = () => {
  const product = {
    picture: "",
    name: "",
    description: "",
    is_liked: false,
    number_of_likes: 0,
    is_sold: false,
    price: "1000ar",
    id: uuidv4(),
    location: "",
    owner_address: "",
    owner_email: "",
    owner_name: "",
    payment_method: null
  }

  const [newProduct, setNewProduct] = useState([
    { name: "picture", value: "", type: "String" },
    { name: "name", value: "", type: "String" },
    { name: "description", value: "", type: "String" },
    { name: "price", value: "", type: "String" },
    { name: "is_sold", value: "", type: "Boolean" }
  ])

  const [productOwner, setProductOwner] = useState([
    { name: "owner_address", value: "", type: "String" },
    { name: "owner_email", value: "", type: "Email" },
    { name: "owner_name", value: "", type: "String" },
    { name: "location", value: "", type: "String" },
  ])

  return (
    <Fragment>
      <div className={`relative h-[100vh] overflow-y-scroll -z-10`}>
        <Header />
        <div className='mt-[10%] max-w-[1300px] w-full mx-auto flex justify-between gap-y-20 flex-wrap'>
          <div className='max-w-[600px] w-full'>
            <h1 className='mb-5 text-center text-2xl'>New Product</h1>
            <div>
              {newProduct.map((prod, index) => (
                <div key={prod.name}>
                  <label htmlFor="name" className='text-slate-600'>{capitalizeFirstLetter(prod.name)}</label>
                  <input type={prod.type === "String" ? "text" : prod.type === "Boolean" ? "checkbox" : "number"} id={prod.name} className='p-3 rounded-md w-full border' />
                </div>
              ))}
            </div>
          </div>
          <div className='max-w-[600px] w-full'>
            <h1 className='mb-5 text-center text-2xl'>Product Owner</h1>
            <div>
              {productOwner.map((prod, index) => (
                <div key={prod.name}>
                  <label htmlFor="name" className='text-slate-600'>{capitalizeFirstLetter(prod.name)}</label>
                  <input type={prod.type === "String" ? "text" : prod.type === "Email" ? "email" : "number"} id={prod.name} className='p-3 rounded-md w-full border' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewProduct
