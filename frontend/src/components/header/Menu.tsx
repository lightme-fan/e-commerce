import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Menu: FC<any> = ({ className, linkStyle, isMenuOpen }) => {
  return (
    <ul className={className}>
      <li><Link to={"/products"} className={linkStyle}>Products</Link></li>
      <li><Link to={"/personal-products"} className={linkStyle}>Personal Products</Link></li>
      <li><Link to={"/contact"} className={linkStyle}>Contact</Link></li>
      {isMenuOpen && (
        <>
          <li><Link to={"/login"} className={linkStyle}>Login</Link></li>
          <li><Link to={"/signup"} className={linkStyle}>Sign up</Link></li>
        </>
      )}
    </ul>
  )
}

export default Menu;
