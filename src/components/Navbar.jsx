import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex h-3rem bg-[#170550] text-white shadow-md justify-around h-[4rem] items-center">
      <h1 className="font-bold">Ravindra Naga</h1>
      <div className="flex gap-[3rem]">
        <h2 className="hover:text-[#f86f03] hover:cursor-pointer ">Portfolio</h2>
        <h2 className="hover:text-[#f86f03] hover:cursor-pointer ">About</h2>
        <h2 className="hover:text-[#f86f03] hover:cursor-pointer ">Skills</h2>
        <h2 className="hover:text-[#f86f03] hover:cursor-pointer ">Contact</h2>
      </div>
    </div>
  );
};

export default Navbar;
