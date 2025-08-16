import { motion } from 'framer-motion'
import { Mails, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'
import { validate } from '../util/validate';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitForm = (e: any) => {
        e.preventDefault();
        const result = validate(name, email, message)
        if (!result.isValid) {
            console.error(`Error: ${result.message}`);
        }
        
        setIsSubmitting(true)
    }
  return (
    <section id="contact" className="text-text-dark">
       
        <h1 className='font-grotesk text-2xl md:text-4xl font-bold mb-12'>Contact Us</h1>
        <div className='flex flex-col md:flex-row w-[90%] md:w-[80%] gap-8 '>
            <motion.div 
                initial={{ x: -200}}
                whileInView={{  x: 0 }}
                transition={{
                    x : {delay: 0, duration: 0.7}
                }}
                className='basis-1/2 '
            >
                <h1 className="font-grotesk text-2xl font-bold mb-2">Get in Touch</h1>
                <p className='font-inter text-text-muted w-full md:w-[70%] leading-snug'>Have questions or need help? Reach out to our team, and we’ll get back to you promptly to discuss how Mondilla Connect can empower your projects.</p>

                <div className='flex flex-col mt-4 font-inter'>
                    <div className='flex items-center mb-3'><span className='p-3 bg-blue-secondary rounded-xl mr-3'><MapPin className='text-white w-5 h-5' /></span><p className='text-text-dark font-medium'>Benin City, Edo State, Nigeria</p></div>
                    <div className='flex items-center mb-3'><span className='p-3 bg-blue-secondary rounded-xl mr-3'><Mails className='text-white w-5 h-5' /> </span><p className='text-text-dark font-medium'>support@mondilla.io</p></div>
                    <div className='flex items-center'><span className='p-3 bg-blue-secondary rounded-xl mr-3'><Phone className='text-white w-5 h-5' /> </span><p className='text-text-dark font-medium'>+234 702 531 3324</p></div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ x: 300}}
                whileInView={{  x: 0 }}
                transition={{
                    x : {delay: 0, duration: 0.7}
                }}
                className=' basis-1/2'
            >
                <div className='w-full md:w-[90%] bg-blue-light-secondary rounded-2xl px-8 py-16'>        
                    <form onSubmit={submitForm} className="w-full mx-auto space-y-4">
                        <div>
                            <label  className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} id="name" className="w-full p-3 bg-white outline-0 rounded-lg " required />
                        </div>
                        <div>
                            <label  className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className="w-full p-3 rounded-lg bg-white outline-0" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea id="message" onChange={(e) => setMessage(e.target.value)} className="w-full p-3  rounded-lg bg-white outline-0" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-primary text-white py-3 px-6 rounded-4xl hover:bg-blue-700 transition-colors duration-300 ease-linear cursor-pointer">
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact