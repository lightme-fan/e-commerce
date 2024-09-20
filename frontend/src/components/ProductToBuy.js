import React, { useEffect, useRef } from 'react'

const ProductToBuy = ({ state }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Function to check if clicked outside
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const isClosed = state?.handleCloseProductDetails(state?.product?.id);
        return isClosed;
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className='min-w-[300px] h-[90%] absolute opacity-100 z-10 start-2/4 top-2/4 -translate-x-[50%] -translate-y-[433px] shadow-cyan-500/50 shadow-lg border-slate-200 p-8 bg-[#e9e9e9] w-2/6 border border-black rounded-lg'>
      <h2 className='text-slate-600 my-6 font-bold text-2xl'>{state?.product?.name} - {state?.product?.price}</h2>
      <img className='w-full max-h-[346px] h-full mb-2.5' src={state?.product?.picture} alt={`${state?.product?.name}`} />
      <button className='absolute end-4 top-4' onClick={() => state?.handleCloseProductDetails(state?.product?.id)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
      <div className='flex flex-col gap-2.5'>
        <div>
          <label htmlFor="name" className='text-slate-600'>Name</label>
          <input type="text" id='name' className='p-3 rounded-md w-full border' />
        </div>
        <div>
          <label htmlFor="email" className='text-slate-600'>Email address</label>
          <input type="email" id="email" className='p-3 rounded-md w-full border' />
        </div>
        <div>
          <label htmlFor="tel" className='text-slate-600'>Phone number</label>
          <input type="tel" id="tel" className='p-3 rounded-md w-full border' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="payment" className='text-slate-600'>Payment method</label>
          <select name="pets" id="payment" className='p-3 rounded-md w-full border bg-[#fff]'>
            <option value="m-vola" className='text-slate-600'>M-Vola</option>
            <option value="airtel-money" className='text-slate-600'>Airtel Money</option>
            <option value="orange-money" className='text-slate-600'>Orange Money</option>
          </select>
        </div>
        <button 
          className={`w-60 py-3 rounded-md bg-blue-500 text-white hover:bg-gray-200 hover:text-slate-600`}
          onClick={() => state?.handleModalBuy(state?.product?.id)}
        >
          Buy Now!
        </button>
      </div>
    </div>
  )
}

export default ProductToBuy
