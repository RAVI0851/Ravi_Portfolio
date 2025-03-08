import React from "react";
import image from "../assets/image.png"
import Portfolio from "./Portfolio";
const Home = () => {
  return (
    <>
    <div className="flex h-[40rem] w-full bg-[#31065A] items-center justify-end ">
      <div className="m-[4rem]">
        <p className="text-4xl text-[#F86F03] font-semibold font-serif">Hi, It's me</p>
        <h1 className="text-6xl text-white mt-[1rem]">Ravindra babu Naga</h1>
        <h2 className="text-4xl text-white flex mt-[1rem] ">
          And I'm a <p className="text-[#F86F03] ml-[1rem]"> Frontend developer</p>
        </h2>
        <div className="mt-[2rem] gap-[2rem] md:gap-[3rem] flex hover:cursor-pointer ">
        <i className="fa-brands fa-github fa-2x hover:scale-130"></i>
        <i className="fa-brands fa-linkedin fa-2x hover:scale-130"></i>
        <i className="fa-brands fa-instagram fa-2x hover:scale-130"></i>
        </div>
        <button className="text-white bg-[#F86F03] mt-[3rem] rounded-4xl h-[2rem] flex items-center p-4 hover:scale-110 hover:cursor-pointer">Download CV</button>
      </div>
      <div className="h-[30rem] hidden bg-cover md:flex w-1/2 ">
        <img src={image} alt="" />
      </div>
    </div>
    <div className=" bg-[#170550] text-white ">
      <div className="w-full items-center justify-center text-2xl p-4 flex underline whitespace-nowrap underline-offset-[1rem]">
      <span>Recent 
      <span className="text-[#F86F03] "> Projects</span></span>
      </div>
    <Portfolio/>
  </div>
    </>

  );
};

export default Home;
