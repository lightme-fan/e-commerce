import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-[#f4f4f4] py-4 shadow-lg shadow-black">
      <div className="max-w-screen-2xl m-auto p-2 py-4">
        <div className="flex justify-between items-start">
          <h1 className="flex items-center gap-2 text-blue-500 font-semibold">
            <Link to={"/"} className="hover:underline">
              E-Commerce
            </Link>
          </h1>
          <div>
            <Menu />
          </div>
          <div>
            <label htmlFor="name" className="text-slate-600">Stay in touch!</label>
            <input type="email" className="p-3 rounded-md w-full border-2" />
            <div className="text-red-500 italic text-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
