import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Menu: FC<any> = () => {
  return (
    <ul className='flex flex-col gap-3'>
      <li><Link to={"/products"} className="hover:underline">Products</Link></li>
      <li><Link to={"/personal-products"} className="hover:underline">Personal Products</Link></li>
      <li><Link to={"/contact"} className="hover:underline">Contact</Link></li>
    </ul>
  )
}

export default Menu;
