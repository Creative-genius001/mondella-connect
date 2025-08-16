import Dashboard from '../../../public/Dashboard.png'
import Image from 'next/image'

const Hero = () => {


  return (
    <section id="home" className="bg-[url('/grid.svg')] bg-cover bg-center bg-no-repeat h-screen flex items-center flex-col text-center">
        <div className='w-full h-screen overflow-hidden top-0 absolute'>
            <div className='blob blob-1'></div>
            <div className='blob blob-2'></div>
            <div className='blob blob-3'></div>
        </div>
        <div className='z-10 w-full md:w-1/2 flex flex-col items-center mt-28 md:mt-20 lg:mt-12'>
            <h1 className="hero-header font-grotesk text-text-dark text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-[320px] md:max-w-[420px] lg:max-w-4xl mb-3">Collaborate Seamlessly With Mondilla Connect</h1>
            <p className="hero-paragraph font-inter text-base md:text-xl text-text-muted mb-6 max-w-sm md:max-w-xl mx-auto">
                Boost your team&apos;s productivity with our intuitive project collaboration tool.
            </p>
            <button className="hero-btn inline-block font-inter bg-blue-main text-white font-medium py-3 px-8 rounded-4xl bg-blue-primary hover:bg-blue-700 transition-colors duration-300 ease-out  cursor-pointer">
                Get Started Now
            </button>
        </div>
        <div className="mt-8 md:mt-12 absolute -bottom-10 md:-bottom-70 lg:-bottom-90">
            <Image src={Dashboard} alt="dashboard" className="dashboard max-w-[330px] md:max-w-3xl lg:max-w-4xl h-auto mx-auto" />
        </div>
    </section>
  )
}

export default Hero