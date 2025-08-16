'use client'

import { AlignRight, X } from 'lucide-react';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type MobileNavProp = {
    isOpen: boolean,
    toggleMenu: ()=> void;
    links: Array<{name: string, url: string}>
}
const MobileNav = (prop: MobileNavProp) => {
    const { isOpen, toggleMenu, links } = prop;
  return (
    <>
        {isOpen ? <X onClick={toggleMenu} className={`cursor-pointer ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}/> : <AlignRight onClick={toggleMenu} className={`cursor-pointer ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`} />}
        {isOpen && (
            <div className='w-full slide-top bg-[#fffffff3] h-auto flex flex-col absolute top-18 right-0 rounded-2xl p-2'>
                {links.map(link => (
                    <AnchorLink onClick={toggleMenu} key={link.name} href={link.url}>
                        <div className='px-4 py-3 rounded-xl w-full font-medium hover:bg-blue-light-primary transition-colors duration-200 ease-linear'>{link.name}</div>
                    </AnchorLink>
                ))}
                <button className="inline-block bg-blue-main mt-2 text-white font-medium py-3 px-8 rounded-xl bg-blue-primary hover:bg-blue-700 transition-colors duration-300 ease-out  cursor-pointer">
                    Get Started
                </button>
            </div>
        )}
    </>
  )
}

export default MobileNav