import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex items-center justify-center bg-[#31065A] text-white p-4'>
      <span>
        Made with 
        <span class="text-rose-500">❤</span>
        By <Link to='/' className='hover:underline hover:text-blue-900 font-sans text-blue-400'>Ravi</Link>
      </span>
    </div>
  )
}

export default Footer