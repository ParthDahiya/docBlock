import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-b from-slate-400 h-20 absolute w-full top-0'>
        <Link className='text-2xl ' href="/">
                Home
        </Link>
    </div>
  )
}

export default Navbar