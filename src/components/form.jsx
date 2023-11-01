import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../index.css'
import { item } from '../info';
import { motion } from 'framer-motion';
export const Contact = () => {
    const [disable, setDisable] = useState(true)
    const form = useRef();
    const [text, setText]= useState('')
    const sendEmail = (e) => {
        setDisable(true)
        e.preventDefault();
        emailjs.sendForm('service_zhfr8fe', 'template_460b46x', form.current, 'eR96DHithq7eI3eiu')
            .then((result) => {
                console.log(result.text);
                setDisable(false)
            }, (error) => {

            });
    };
    const onChangeText=(e)=>{
        setText(e.target.value)
        if (text.length>30) {
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    return (
        <motion.section
        id='contact'
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}} 
        className="bg-secondary mb-20 mt-20">
            <motion.h2 variants={item} className="text-center text-3xl">Contact Me</motion.h2>
            <div className="stars"></div>
            <motion.div variants={item} className="container flex justify-center" >
                <form className='w-full flex justify-between mt-20 h-96 flex-col max-w-lg bg-form p-10' ref={form} onSubmit={sendEmail}>
                    <label className='text-xl'>Name</label>
                    <input className='shadow bg-form h-10 outline-none border-b-2 border-b-third border-solid z-20 rounded-lg' type="text" name="user_name" />
                    <label className='text-xl' >Email</label>
                    <input className='shadow bg-form h-10 outline-none border-b-2 border-b-third border-solid z-20 rounded-lg' type="email" name="user_email" />
                    <label className='text-xl'>Message</label>
                    <textarea className='shadow bg-form h-10 outline-none border-b-2 border-b-third border-solid z-20 rounded-lg' value={text} onChange={onChangeText} name="message" />
                    <input className={`mt-4 w-32 h-10 mx-auto z-20 ${disable ? 'bg-black text-form' : 'bg-third hover:cursor-pointer'} rounded-lg `} disabled={disable} type="submit" value="Send" />
                </form>
            </motion.div>
        </motion.section>
    )
}
