import React, { Fragment, useContext } from 'react'
import { GeneralContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import { Header, ProductCard, ProductToBuy } from '../components';

const Home = () => {
  const state = useContext(GeneralContext);
  // const { name , price} = state?.product;

  return (
    <Fragment>
      <div className={`relative h-[100vh] ${state?.isBuyModalOpen && "opacity-15 overflow-y-hidden -z-10"} ${!state?.isBuyModalOpen && "overflow-y-scroll"}`}>
        <Header />
        <main>
          <section className='bg-[#f4f4f4] mt-[74px]'>
            <div className='p-2 py-8 pb-28 max-w-screen-2xl m-auto'>
              <h1 className='text-center text-[56px] my-10 text-slate-600'>E-Commerce</h1>
              <p className='text-center text-xl text-slate-600 max-w-[510px] m-auto'>
                We love promoting people’s businesses and helping them sell their products.
              </p>
            </div>
          </section>
          <section className='p-2 py-8 max-w-screen-2xl m-auto flex md:flex-col flex-col-reverse '>
            <Link
              to={"/new_product"}
              className='md:self-end self-center w-40 mt-2 py-2.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center'
            >
              Add Product
            </Link>
            <div>
              <div>
                <h1 className='text-center text-2xl text-slate-600'>All products</h1>
                <p className='text-center text-md text-slate-600 my-4 max-w-[530px] m-auto'>
                  These are the available products we have at the moment. Help yourself to find your own interests
                </p>
              </div>
              <div className='my-3 mt-12 md:flex md:flex-wrap md:justify-center gap-10'>
                {state?.products?.map(product => (
                  <ProductCard item={product} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      {state?.isBuyModalOpen && state?.product && (
        <ProductToBuy state={state} />
      )}
    </Fragment>
  )
}

export default Home;
