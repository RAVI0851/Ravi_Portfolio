import React from "react";
import image from "../assets/image.png"
const Hero = () => {
  return (
    <div className="flex h-[40rem] w-full bg-[#31065A] items-center justify-around ">
      <div className="m-[4rem]">
        <p className="text-4xl text-[#F86F03] font-semibold font-serif">Hi, It's me</p>
        <h1 className="text-6xl text-white mt-[1rem[">Ravindra babu Naga</h1>
        <h2 className="text-4xl text-white flex mt-[1rem]">
          And I'm a <p className="text-[#F86F03] ml-[1rem]"> Frontend developer</p>
        </h2>
        <div className="mt-[2rem] flex gap-[3rem]">
        <i className="fa-brands fa-github fa-2x hover:scale-130"></i>
        <i className="fa-brands fa-linkedin fa-2x hover:scale-130"></i>
        <i className="fa-brands fa-instagram fa-2x hover:scale-130"></i>
        </div>
        <button className="text-white bg-[#F86F03] mt-[3rem] rounded-4xl h-[2rem] flex items-center p-4 hover:text-2xl">Download CV</button>
      </div>
      <div className="h-[35rem] w-1/2 flex ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
