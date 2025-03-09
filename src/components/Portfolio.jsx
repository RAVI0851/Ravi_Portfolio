import React from "react";
import filmVaultPic from "../assets/filmVaultPic.jpeg";
import weatherAppImg from "../assets/weatherAppPng.png";
import finaceTracker from "../assets/FinancetrackerImg.jpeg";

const Portfolio = () => {
  return (
    <div className="bg-[#31065A] w-full text-white items-center flex flex-col gap-[2rem]  ">
      <h1 className="underline underline-offset-[1rem] w-full text-center m-[2rem] p-2 text-4xl">
        Portfolio
      </h1>
      {/* Project1 */}
      <div className="flex h-[12rem] w-full border justify-stretch rounded-xl md:w-1/2 ">
        {/* Left-half */}
        <div className="flex  h-full w-[12rem] bg-cover ">
          <img src={filmVaultPic} alt="" />
        </div>
        {/* Right half */}
        <div className="flex  flex-col gap-[3rem] m-[1rem] ">
          <h1 className="bg-gray-500 text-2xl font-extrabold text-center flex">
            Film Vault
          </h1>
          <div className="flex gap-[3rem]">
            <a
              target="_blank"
              href="https://movies-eta-green.vercel.app/"
              className="bg-blue-400 rounded-xl p-2 hover:scale-110"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/RAVI0851/Film-Vault"
              className="bg-black rounded-xl p-2 hover:scale-110"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
      {/* Project-2 */}
      <div className="flex h-[12rem] w-full md:w-1/2 border justify-stretch rounded-xl">
        {/* Left-half */}
        <div className="flex border h-full w-[12rem] bg-cover">
          <img src={weatherAppImg} alt="" />
        </div>
        {/* Right half */}
        <div className="flex  flex-col gap-[3rem] m-[1rem] ">
          <h1 className="bg-gray-500 text-2xl font-extrabold text-center flex">
            Basic Weather App
          </h1>
          <div className="flex gap-[3rem]">
            <a
              target="_blank"
              href="https://ravi0851.github.io/Weather-app/"
              className="bg-blue-400 rounded-xl p-2 hover:scale-110"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/RAVI0851/Weather-app"
              className="bg-black rounded-xl p-2 hover:scale-110"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
      {/* Project-3 */}
      <div className="flex h-[12rem] w-full md:w-1/2 border justify-stretch rounded-xl">
        {/* Left-half */}
        <div className="flex border h-full w-[12rem] bg-cover">
          <img src={finaceTracker} alt="" />
        </div>
        {/* Right half */}
        <div className="flex flex-wrap flex-col gap-[3rem] m-[1rem] ">
          <h1 className="bg-gray-500 text-2xl font-extrabold text-center flex">
            Personal Finance tracker
          </h1>
          <div className="flex gap-[3rem]">
            <a
              target="_blank"
              href="https://ravi0851.github.io/Personal-finance-tracker/"
              className="bg-blue-400 rounded-xl p-2 hover:scale-110"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/RAVI0851/Personal-finance-tracker"
              className="bg-black rounded-xl p-2 hover:scale-110"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
