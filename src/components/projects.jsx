import React, { forwardRef, useState } from 'react';
import '../index.css'
import { container, item, projects } from '../info';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            7,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Projects = () => {
    
    return (
        <div className='background pt-16 pb-40'>
            <motion.section
            id='projects'
                initial="hidden"
                whileInView="visible"
                variants={container}
                viewport={{ amount: 0.2, once: true}}
                className='container'>
                <h1 className='text-center text-3xl'>My Projects</h1>
                <div className=' mt-16 pb-16 flex flex-wrap gap-32 justify-around'>
                    {projects.map((obj) => {
                        return (
                            <MProject variants={item} tech={obj.tech} project={obj.project} link={obj.link} title={obj.title} img={obj.img} description={obj.description} />
                        )
                    })}
                </div>
            </motion.section>
        </div>
    )
}
const Project = forwardRef(({ title, img, description, link, project, tech }, ref) => {
    return (
        <Tilt options={defaultOptions} >
        <div ref={ref} className='relative flex max-w-lg flex-col bg-primary rounded-3xl'>
            <div><a href={project}><img className='rounded-t-3xl w-full h-64' src={`${img}`} alt="" /></a></div>
            <div>
            <a href={project}><h1 className='text-center text-2.5xl'>{title}</h1></a>
                <div className='break-words p-7 text-xl' >{description}</div>
            </div>
            <a href={link}><i class=" z-10 fa-brands fa-github fa-2xl text-white absolute right-2 top-5"></i></a>
            <div className='flex justify-center flex-wrap gap-4 mb-6'>
            {tech.map((obj)=>{return <Type name={obj}/> })}
            </div>
        </div>
        </Tilt>
    )
})
const MProject = motion(Project)
const Type=({name})=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return(
        <div className='p-2 rounded-xl' style={{ color: `rgba(${r}, ${g}, ${b}, 0.5)`, backgroundColor: `rgba(${r}, ${g}, ${b}, 0.15)` }}>#{name}</div>
    )
}
