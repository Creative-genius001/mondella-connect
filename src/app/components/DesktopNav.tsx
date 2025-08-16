'use client'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type DesktopNavProp = {
    links: Array<{name: string, url: string}>
    toggleMenu: ()=> void;
} 
const DesktopNav = (props: DesktopNavProp) => {
      const { links, toggleMenu } = props;
  return (
    <>
        <div>
            <ul className='flex items-center'>
                {
                    links.map(link => (
                        <AnchorLink onClick={toggleMenu} href={link.url} key={link.name}>
                            <li className='mr-8 font-medium'>{link.name}</li>
                        </AnchorLink>
                    ))
                }
            </ul>
        </div>
        <button className="inline-block bg-blue-main text-white font-medium py-3 px-8 rounded-4xl bg-blue-primary hover:bg-blue-700 transition-colors duration-300 ease-out  cursor-pointer">
            Get Started
        </button>
    </>
  )
}

export default DesktopNav