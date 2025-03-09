import React from 'react'
import html from "../assets/html-5.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import git from "../assets/git.png"
import java from "../assets/java.png"
import dsa from "../assets/Dsa.png"
import vsCode from '../assets/visual-studio.png'
function Skills() {
  const Skills = [
    {name:"Html",
      icon:html,
    },
    {
      name:"Css",
      icon:css,
    },
    {
      name:"JavaScript",
      icon:js,
    },
    {
      name:"React.js",
      icon:react,
    },
    {
      name:"Tailwind",
      icon:tailwind,
    },
    {
      name:"Git",
      icon:git,
    },
    {
      name:"Java",
      icon:java,
    },
    {
      name:"Dsa",
      icon:dsa,
    },
    {
      name:"Vs Code",
      icon:vsCode,
    },
  ]
  return (
    <div className='bg-[#50367A] h-[100vh] flex justify-center flex-col'>
      <h1 className=' text-white text-4xl text-center underline underline-offset-[1rem] p-4'>Skills</h1>
    <div className=' grid mx-auto my-auto max-w-[30rem] grid-cols-3  gap-x-0 gap-y-0 justify-center items-center '>
      {Skills.map((skill)=>{
        return <div className='border border-0.5 border-white flex flex-col items-center hover:scale-105'>
          <img className='h-[8rem] w-[8rem] md:h-[8rem] md:w-[8rem]' src={skill.icon} alt="hello" />
          <span className='text-white'>{skill.name}</span>
        </div>
      })}
    </div>
    </div>
  )
}

export default Skills
