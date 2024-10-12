import React, { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/shopping-cart.png";
import useHooks from './useHooks';
import Menu from './Menu';

const Header = () => {
  const { menuRef, isMenuOpen, handleOpenMenu } = useHooks();

  return (
    <header className='fixed w-full bg-white shadow-md z-50'>
      <div className='p-2 py-4 flex justify-between items-center max-w-screen-2xl m-auto'>
        <div className='flex justify-between gap-20'>
          <h1 className='flex items-center gap-2'>
            <Link to={"/"}>
              <img src={logo} alt="E commerce Logo" className='w-10' />
            </Link>
            <span className='md:hidden text-slate-600 mt-1'>E-Commerce</span>
          </h1>
          <nav className='hidden md:block'>
            <Menu className="flex gap-4" linkStyle="block w-full px-2 py-1.5 hover:bg-gray-100 mt-1 text-slate-600" isMenuOpen={isMenuOpen} />
          </nav>
        </div>
        <div className='md:hidden relative'>
          <button onClick={handleOpenMenu}>
            <i className="fa fa-bars fa-xl" aria-hidden="true"></i>
          </button>
          {isMenuOpen && (
            <div ref={menuRef} className='absolute -start-36 pt-2 shadow-lg bg-[#fcfafa]'>
              <Menu className="flex flex-col gap-4 w-50" linkStyle="block w-full px-4 py-1.5 hover:bg-gray-200 text-slate-600" isMenuOpen={isMenuOpen} />
            </div>
          )}
        </div>
        <div className='hidden md:flex mt-1 w-[180px] gap-2'>
          <Link to="/login" className='block w-full px-4 py-1.5 hover:bg-gray-200 text-slate-600 rounded-md border'>Log in</Link>
          <Link to="/signup" className='block w-full px-4 py-1.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white'>Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
