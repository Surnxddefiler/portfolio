import { motion } from 'framer-motion'
import '../index.css'
import { about, container, item } from '../info'
export const About=()=>{
    return(
    <motion.section 
    id='about'
    initial='hidden'
    whileInView='visible'
    viewport={{amount: 0.2, once: true}}
    className='bg-secondary mt-20'>
        <div className='container'>
        <motion.h1 variants={item} className='text-center text-3xl'>About Me</motion.h1>
        <motion.div variants={item} className='text-2.5xl' >{about}</motion.div>
        </div>
    </motion.section>
    )
}