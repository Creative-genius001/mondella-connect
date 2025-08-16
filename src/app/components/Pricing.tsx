import React from 'react'
import PriceCard from './ui/PriceCard';
import { IPrice } from '../types/type';

const Pricing = () => {


const pricingPlans: Array<IPrice> = [
  {
    name: 'Basic',
    price: '$9',
    features: ['5 Projects', '10GB Storage', 'Basic Support'],
    isMostPopular: false,
    description: 'Perfect for small teams starting with project collaboration.',
  },
  {
    name: 'Standard',
    price: '$19',
    features: ['20 Projects', '50GB Storage', 'Priority Support'],
    isMostPopular: true,
    description: 'Ideal for growing teams needing enhanced features and support.',
  },
  {
    name: 'Premium',
    price: '$49',
    features: ['Unlimited Projects', '200GB Storage', '24/7 Support'],
    isMostPopular: false,
    description: 'Best for large teams requiring unlimited projects and support.',
  },
];

  return (
    <section id="pricing" className=""> 
        <div className='w-[90%] md:w-full flex items-center flex-col'>
          <h2 className="font-grotesk text-2xl md:text-4xl font-bold text-center mb-2 ">Choose Your Plan</h2>
          <p className='font-inter text-base md:text-lg text-text-muted text-center'>Optimized pricing for the success of your team</p>
          <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center font-inter text-text-dark mt-12">
              {pricingPlans.map((pricing)=> (
                  <PriceCard key={pricing.name} pricing={pricing} />
              ))}
          </div>
        </div>
    </section>
  )
}

export default Pricing