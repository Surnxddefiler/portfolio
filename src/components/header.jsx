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
                <span className='hidden md:block text-2xl'>Porfolio</span>
            </div>
            <nav className='hidden lg:flex text-xl gap-4 duration-100'>
                <a className="animation duration-500" href="#projects">Projects</a>
                <a href="#technologies" className='space'>Technologies</a>
                <a href="#about" className='space whitespace-nowrap'>About me</a>
                <a href="#experience" className='space'>Expereince</a>
                <a href="#contact" className='space whitespace-nowrap'>Contact me</a>
            </nav>
            <div className='hidden lg:flex gap-4'>
                <a href="https://github.com/Surnxddefiler"><i class="fa-brands fa-github fa-2xl text-white "></i></a>
                <a href="https://www.instagram.com/surnxd._defiler"><i class="fa-brands fa-instagram fa-2xl text-white" ></i></a>
                <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%B3%D0%B0%D0%B3%D0%B0%D1%94%D0%B2-40a493270/"><i class="fa-brands fa-linkedin fa-2xl text-white" ></i></a>
            </div>
            <div className="flex justify-center flex-col items-center lg:hidden" >
            <div className="">{toggle ? <i onClick={()=>{setToggle(!toggle)}} class="fa-solid text:white fa-xmark fa-2xl"></i> : <i onClick={()=>{setToggle(!toggle)}} class="fa-solid fa-bars text:white fa-2xl" ></i> } </div>
            {toggle ? <motion.div 
            className="gap-2 flex justify-center items-center flex-col"
            initial="hidden"
            whileInView="visible"
            variants={container} 
            viewport={{amount: 0.2, once: true}} 
            >
            <a className="animation duration-500" href="#projects">Projects</a>
                <a href="#technologies" className='space'>Technologies</a>
                <a href="#about" className='space whitespace-nowrap'>About me</a>
                <a href="#experience" className='space'>Expereince</a>
                <a href="#contact" className='space whitespace-nowrap'>Contact me</a>
                <div className="flex gap-2 items-center">
                <a href="https://github.com/Surnxddefiler"><img className='w-8' src="assets/git.png" alt="" /></a>
                <a href="https://www.instagram.com/surnxd._defiler"><img className='w-8' src="assets/i.jpg" alt="" /></a>
                <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%B3%D0%B0%D0%B3%D0%B0%D1%94%D0%B2-40a493270/"><i class="fa-brands fa-linkedin fa-2xl text-white" ></i></a>
                </div>
            </motion.div>: ''}
            </div>
        </header>
    )
}