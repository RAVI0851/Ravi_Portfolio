import React from "react";
import filmVaultPic from "../assets/filmVaultPic.jpeg";
import JobPortalImg from "../assets/JobPortal.png";
import finaceTracker from "../assets/FinancetrackerIMg.jpeg";

function Portfolio() {
  const projects = [
    {
      title:'Film Vault',
      img:filmVaultPic,
      demo:"https://movies-eta-green.vercel.app/",
      repo:"https://github.com/RAVI0851/Film-Vault"
    },
    {
       title:'Insider Jobs',
      img:JobPortalImg,
      demo:"https://insider-jobs-six.vercel.app/",
      repo:"https://github.com/RAVI0851/Ravi_Portfolio"
    },
    {
      title:'Personal Finance Tracker',
      img:finaceTracker,
      demo:"https://ravi0851.github.io/Personal-finance-tracker/",
      repo:"https://github.com/RAVI0851/Personal-finance-tracker"
    },
  ]
  return (
    <div className="bg-[#31065A] w-full text-white items-center flex flex-col gap-[2rem]  ">
      <h1 className="underline underline-offset-[1rem] w-full text-center m-[2rem] p-2 text-4xl">
        Portfolio
      </h1>
      {/* Project */}
      {projects.map((project) => {
        return(
        <div className="flex h-[12rem] w-full border justify-stretch rounded-xl md:w-1/2 ">
          {/* Left-half */}
          <div className="flex  h-full w-[12rem] bg-cover ">
            <img src={project.img} loading='lazy' alt="" />
          </div>
          {/* Right half */}
          <div className="flex  flex-col gap-[3rem] m-[1rem] ">
            <h1 className="bg-gray-500 text-2xl font-extrabold text-center flex">
              {project.title}
            </h1>
            <div className="flex gap-[3rem]">
              <a
                target="_blank"
                href={project.demo}
                className="bg-blue-400 rounded-xl p-2 hover:scale-110"
              >
                Demo
              </a>
              <a
                target="_blank"
                href={project.repo}
                className="bg-black rounded-xl p-2 hover:scale-110"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>)
      })}
    </div>
  );
}

export default Portfolio;
