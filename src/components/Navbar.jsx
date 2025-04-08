import React from 'react'
import CustomButton from './customButton'

const Navbar = () => {
  return (
    <nav className='flex top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a href="" className="text-xl font-bold text-white relative right-[30rem]">{" "}Andika{" "}</a>
                <div className='hidden md:flex items-center space-x- relative left-[35rem]'>
                    <a href="#home">
                      <CustomButton text={"Home"} />
                      </a>
                      <a href="#about">
                    <CustomButton text={"About"} />
                      </a>
                      <a href="">
                    <CustomButton text={"Contact"} />
                      </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar