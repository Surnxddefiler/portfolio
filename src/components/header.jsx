import { useState } from "react"
import  "../index.css"
import { motion } from "framer-motion"
import { container } from "../info"
export const Header=()=>{
    const [toggle, setToggle]=useState(false)
    return(
        <header className={`lg:justify-around ${toggle ? 'justify-center' : 'justify-between '} p-10 bg-form  top-0 flex items-center fixed w-full z-20`}>
            <div className='flex items-center gap-4'>
               <a className={`${toggle && 'hidden'}`} href="#intro"><img className='w-24' src='/assets/logo.png' alt="" /></a>
                <h1 className='hidden md:block text-2xl'>Porfolio</h1>
            </div>
            <nav className='hidden lg:flex text-xl gap-4 duration-100'>
                <a className="menu__item" href="#projects">Projects</a>
                <a href="#technologies" className='space menu__item'>Technologies</a>
                <a href="#experience" className='space menu__item'>Expereince</a>
                <a href="#contact" className='space whitespace-nowrap menu__item'>Contact me</a>
            </nav>
            <div className='hidden lg:flex gap-4'>
                <a href="https://github.com/Surnxddefiler"><i className="social__item fa-brands fa-github fa-2xl text-white "></i></a>
                <a href="https://www.instagram.com/surnxd._defiler"><i className="social__item fa-brands fa-instagram fa-2xl text-white" ></i></a>
                <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%B3%D0%B0%D0%B3%D0%B0%D1%94%D0%B2-40a493270/"><i className="social__item fa-brands fa-linkedin fa-2xl text-white" ></i></a>
            </div>
            <div className="flex justify-center flex-col items-center lg:hidden" >
            <div className="">{toggle ? <i onClick={()=>{setToggle(!toggle)}} className="fa-solid text:white fa-xmark fa-2xl"></i> : <i onClick={()=>{setToggle(!toggle)}} className="fa-solid fa-bars text:white fa-2xl" ></i> } </div>
            {toggle ? <motion.div 
            className="gap-2 flex justify-center items-center flex-col"
            initial="hidden"
            whileInView="visible"
            variants={container} 
            viewport={{amount: 0.2, once: true}} 
            >
            <a className="animation duration-500 menu__item" onClick={()=>{setToggle(false)}} href="#projects">Projects</a>
                <a href="#technologies" onClick={()=>{setToggle(false)}} className='menu__item space'>Technologies</a>
                <a href="#experience" onClick={()=>{setToggle(false)}} className='menu__item space'>Expereince</a>
                <a href="#contact" onClick={()=>{setToggle(false)}} className='menu__item space whitespace-nowrap'>Contact me</a>
                <div className="flex gap-2 items-center">
                <a href="https://github.com/Surnxddefiler"><i className="social__item fa-brands fa-github fa-2xl text-white "></i></a>
                <a href="https://www.instagram.com/surnxd._defiler"><i className="social__item fa-brands fa-instagram fa-2xl text-white" ></i></a>
                <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%B3%D0%B0%D0%B3%D0%B0%D1%94%D0%B2-40a493270/"><i className="social__item fa-brands fa-linkedin fa-2xl text-white" ></i></a>
                </div>
            </motion.div>: ''}
            </div>
        </header>
    )
}