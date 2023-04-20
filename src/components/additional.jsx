import '../index.css'
import { motion } from 'framer-motion'
import { add, container} from '../info'
export const Additional=()=>{
    return(
        <motion.section
        initial='hidden'
        whileInView='visible'
        variants={container}
        viewport={{amount: 0.2, once: true}}
        className='mt-20'
        >
            <div className="container">
                <h1 className='text-center text-3xl'>Additional skills</h1>
                <div className='mt-20 flex flex-wrap gap-32 justify-around text-center' >
                    {add.map((obj)=>{
                        return <Add id={obj.id} skill={obj.skill}/>
                    })}
                </div>
            </div>
        </motion.section>
    )
}
const Add=({id, skill})=>{
    return <li key={id} className='text-2.5xl'>{skill}</li>
}