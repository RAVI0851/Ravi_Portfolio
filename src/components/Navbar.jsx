import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex bg-[#170550] text-white shadow-md justify-around gap-[3rem] md:gap-[4rem] h-[4rem] items-center">
      <h1 className="font-bold rounded-3xl p-4  hover:bg-gray-600">Ravindra Naga</h1>
      <div className="flex gap-[1rem] md:gap-[2rem] ">
      <Link to='/' className="hover:text-[#f86f03] hover:cursor-pointer ">Home</Link>
       <Link to='/portfolio' className="hover:text-[#f86f03] hover:cursor-pointer ">Portfolio</Link>
        <Link to='/skills' className="hover:text-[#f86f03] hover:cursor-pointer ">Skills</Link>
        <Link to='/contact' className="hover:text-[#f86f03] hover:cursor-pointer ">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
