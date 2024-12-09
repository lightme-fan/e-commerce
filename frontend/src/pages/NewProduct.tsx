import { Fragment } from 'react'
import { Header, Input } from '../components'
import { capitalizeFirstLetter } from '../utils/utils';
import { Link } from 'react-router-dom';

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
        <div className='my-36 max-w-[1300px] w-full mx-auto px-4'>
          <div className='flex flex-col justify-between items-center gap-y-20 md:flex-row md:justify-center md:items-start md:gap-x-20'>
            <div className='max-w-[600px] w-full'>
              <h1 className='mb-5 text-center text-2xl'>New Product</h1>
              <div className='flex flex-col gap-4'>
                {newProduct.map((prod, index) => (
                  <Input
                    key={`product.${index}.${prod.name}`}
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
                    key={`owner.${index}.${prod.name}`}
                    type={prod.type === "String" ? "text" : prod.type === "Boolean" ? "checkbox" : "number"}
                    id={prod.name}
                    name={prod.name}
                    label={capitalizeFirstLetter(prod.name)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='mt-8 flex justify-center gap-4 md:justify-start'>
            <button
              className='md:self-end self-center w-40 mt-2 py-2.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center'
            >
              Add Product
            </button>
            <Link
              className='md:self-end self-center w-40 mt-2 py-2 border border-red-400 hover:bg-red-400 rounded-md bg-transparent text-center'
              to={"/"}
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewProduct
