'use client'

import { useState } from "react";
import useIsMobile from "../hooks/use-mobile";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import Image from 'next/image'
import logo from '../../../public/logo.png'


const Header = () => {
    const isMobile = useIsMobile();
     const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const links = [
        {name: "Home", url: "/"},
        {name: "Features", url: "#features"},
        {name: "Pricing", url: "#pricing"},
        {name: "Contact", url: "#contact"},
    ]
    return(
        <>
            <nav className='font-inter w-[85%] lg:w-[70%] bg-[#ffffff66] h-[70px] flex justify-between items-center rounded-4xl shadow-2xl absolute z-40 top-14 left-1/2 -translate-x-1/2 -translate-y-1/2  px-8'>
                <Link href='/'>
                    <Image src={logo} alt="mondella" className='w-[90px] md:w-[120px] h-auto object-contain' />
                </Link>
                {isMobile ? <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} links={links} /> : <DesktopNav toggleMenu={toggleMenu} links={links} />}
            </nav>   
        </>
    )

}

export default Header