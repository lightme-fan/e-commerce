import React, { Fragment, useContext } from 'react'
import { GeneralContext } from '../contexts/AppContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const state = useContext(GeneralContext);
  // const { products } = state;
  console.log("products:::::::::::::", state?.products)

  if (!state) {
    // Handle the null case
    console.error('MyContext is null');
    return null;
  }
  
  return (
    <Fragment>
      <Header />
      <main>
        <section className='bg-[#f4f4f4]'>
          <div className='p-2 py-8 pb-28 max-w-screen-2xl m-auto'>
            <h1 className='text-center text-[56px] my-10 text-slate-600'>E-Commerce</h1>
            <p className='text-center text-xl text-slate-600 max-w-[510px] m-auto'>
              We love promoting people’s businesses and helping them sell their products.
            </p>
          </div>
        </section>
        <section>
          <div className='p-2 py-8 max-w-screen-2xl m-auto'>
            <div>
              <h1 className='text-center text-2xl text-slate-600'>All products</h1>
              <p className='text-center text-md text-slate-600 my-4 max-w-[530px] m-auto'>
                These are the available products we have at the moment. Help yourself to find your own interests
              </p>
            </div>
            <div className='my-3 mt-12 md:flex md:flex-wrap md:justify-between gap-10'>
              {state?.products?.map(product => (
                <ProductCard item={product}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default Home;
