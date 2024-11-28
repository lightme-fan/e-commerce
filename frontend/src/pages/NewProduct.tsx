import { Fragment } from 'react'
import { Header, Input } from '../components'
import { capitalizeFirstLetter } from '../utils/utils';

const NewProduct = () => {
  const newProduct = [
    { name: "picture", value: "", type: "String" },
    { name: "name", value: "", type: "String" },
    { name: "description", value: "", type: "String" },
    { name: "price", value: "", type: "String" },
    { name: "is_sold", value: "", type: "Boolean" }
  ]

  const productOwner = [
    { name: "owner_address", value: "", type: "String" },
    { name: "owner_email", value: "", type: "Email" },
    { name: "owner_name", value: "", type: "String" },
    { name: "location", value: "", type: "String" },
  ]

  return (
    <Fragment>
      <div className={`relative h-[100vh] overflow-y-scroll`}>
        <Header />
        <div className='mt-[10%] max-w-[1300px] w-full mx-auto'>
          <div className='flex justify-between gap-y-20 flex-wrap'>
            <div className='max-w-[600px] w-full'>
              <h1 className='mb-5 text-center text-2xl'>New Product</h1>
              <div className='flex flex-col gap-4'>
                {newProduct.map((prod, index) => (
                  <Input
                    key={prod.name}
                    type={prod.type === "String" ? "text" : prod.type === "Boolean" ? "checkbox" : "number"}
                    id={prod.name}
                    name={prod.name}
                    label={capitalizeFirstLetter(prod.name)}
                  />
                ))}
              </div>
            </div>
            <div className='max-w-[600px] w-full'>
              <h1 className='mb-5 text-center text-2xl'>Product Owner</h1>
              <div className='flex flex-col gap-4'>
                {productOwner.map((prod, index) => (
                  <Input
                    key={prod.name}
                    type={prod.type === "String" ? "text" : prod.type === "Boolean" ? "checkbox" : "number"}
                    id={prod.name}
                    name={prod.name}
                    label={capitalizeFirstLetter(prod.name)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='mt-8 flex gap-4'>
            <button
              className='md:self-end self-center w-40 mt-2 py-2.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center'
            >
              Add Product
            </button>
            <button
              className='md:self-end self-center w-40 mt-2 py-2 border border-red-400 hover:bg-red-400 rounded-md bg-transparent text-center'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewProduct
