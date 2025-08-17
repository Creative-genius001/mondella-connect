import { IPrice } from '@/app/types/type'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import React from 'react'

type PriceProp = {
    pricing: IPrice
}
const PriceCard = ({pricing: {price, name, description, features, isMostPopular}}: PriceProp) => {
  return (
    <motion.div 
        initial={{ scaleY: 0.9, y: 140}}
        whileInView={{scaleY: 1,  y: 0 }}
        transition={{
            scaleY: {duration: 0.2},
            y : {delay: 0, duration: 0.2}
        }}
        className={`${isMostPopular ? 'popular' : 'not-popular' } bg-white rounded-3xl p-8 w-full md:w-[350px] border border-light-border hover:scale-105 transition-all duration-300 ease-linear relative`}>
        {isMostPopular && <span className='absolute right-6 top-3 bg-blue-light-primary text-blue-primary py-[5px] px-4 rounded-2xl text-sm font-semibold'>Popular</span> }
        <h3 className="text-base font-bold mb-2">{name}</h3>
        <p className='text-text-muted mb-5 leading-snug text-[16px]'>{description}</p>
        <p className="text-4xl font-bold mb-5">{price}<span className="text-sm font-normal">/mo</span></p>

        <p className='font-bold text-[16px] text-text-dark mb-2'>What&apos;s included:</p>
        <ul className="text-text-muted  mb-12 space-y-1">
            {
                features.map((f, index)=> (
                    <li className='text-text-muted flex items-center text-[16px]' key={index}><Check className='text-green-400 mr-1 w-5 h-5' />{f}</li>
                ))
            }
        </ul>
        <button  className="block text-base font-semibold border border-grey-border  text-text-dark w-full py-3 px-6 rounded-[100px] text-center hover:text-white hover:bg-blue-primary transition-colors ease-linear duration-300 cursor-pointer">
            Get Started
        </button>
    </motion.div>
  )
}

export default PriceCard