import React, { FC } from 'react'

const ProductCard: FC<any> = ({ item }) => {
  return (
    <div className='shadow-lg max-w-[486px] m-auto my-10 md:my-0 w-full bg-[#f9f9f9] relative flex flex-col justify-between' key={item?.id}>
      <img className='w-full max-h-[346px] h-full' src={item?.picture} alt={`${item?.name}`} />
      <div className='px-6 py-1'>
        <h2 className='text-slate-600 my-3 text-2xl'>{item?.name}</h2>
        <p className='text-slate-600 my-3'>{item?.description}.</p>
        <div className='text-slate-600 my-3 flex items-center gap-2'>
          <button>
            <i className="fa-regular fa-heart fa-lg"></i>
          </button>
          <span>{item?.number_of_likes}</span>
        </div>
        {/* <i className="fa-solid fa-heart"></i> */}
        <div className='text-slate-600 my-3 flex items-center justify-between'>
          <div className='text-slate-600 text-lg'>{item?.price}</div>
          <button className='w-60 py-3 rounded-md bg-blue-500 text-white hover:bg-gray-200 hover:text-slate-600'>Buy</button>
          <button className='text-slate-600'>
            <i className="fa-solid fa-trash fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
