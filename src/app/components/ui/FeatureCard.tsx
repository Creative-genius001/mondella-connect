import { IFeatures } from '@/app/types/type'
import { motion } from 'framer-motion'
import React from 'react'

type FeatureProp = {
    feature: IFeatures
}

const FeatureCard = ({ feature }: FeatureProp) => {
  return (
    <motion.div 
      initial={{ scaleX: 0.9, y: 100}}
      whileInView={{scaleX: 1,  y: 0 }}
      transition={{
        scaleX: {duration: 0.3},
        y : {delay: 0, duration: 0.3}
      }}
      className='w-full md:w-[360px] h-[200px] hover:scale-105 transition-all ease-linear font-inter p-8 bg-white rounded-2xl'
    >
        <div className='w-10 h-10 bg-blue-light-primary text-blue-primary flex justify-center items-center rounded-[50%]'>{feature.icon}</div>
        <h1 className='font-bold text-lg text-text-dark mb-2 mt-4'>{feature.heading}</h1>
        <p className='text-text-muted leading-snug'>{feature.paragraph}</p>
    </motion.div>
  )
}

export default FeatureCard