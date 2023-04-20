import '../index.css'
import { motion } from 'framer-motion';
import { container, item, technologies } from '../info';
import { forwardRef } from 'react';
export const Technologies=()=>{
    
    return(
        <section className="bg-secondary">
            <motion.div
            id='technologies'
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{amount: 0.2, once: true}} 
            className="container">
                <h1 className="text-center text-3xl">Technologies</h1>
                <div className='mt-12 flex flex-col justify-center'>
                    {technologies.map((obj)=>{
                        return(
                            <MTechnologie variants={item} knowledge={obj.knowledge} title={obj.title}/>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}
const Technologie=forwardRef(({knowledge, title},ref)=>{
    const fill = {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: knowledge,
        }
    };
    
    return(
        <motion.div ref={ref} initial="hidden" whileInView="visible" viewport={{amount: 0.2, once: true}} className='flex align flex-col'>
            <div className='items-center flex justify-between'><div className='text-2.5xl text-center' >{title}</div><div className='text-xl'>{knowledge}</div> </div>
            <div className='statBar'>
                <motion.div variants={fill} className='statLine h-7' ></motion.div>
            </div>
        </motion.div>
    )
})
const MTechnologie=motion(Technologie)
