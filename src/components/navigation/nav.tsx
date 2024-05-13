import { Logo } from "./logo"
import { useState,useEffect } from "react";

const navigation = [
    {
        id:1,
        label:"Home",
        href:"#hero"
    },
    {
        id:2,
        label:"About",
        href:"#about"
    },
    {
        id:3,
        label:"Services",
        href:"#service"
    },
    {
        id:4,
        label:"Product",
        href:"#product"
    },
]
export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) { // Adjust 50 to your preferred scroll position
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={` ${scrolled?'scrolled':''}  w-full font-code font-bold py-3 px-2 flex border-b-[0.5px] border-color-3 justify-between top-0 fixed lg:backdrop-blur-sm bg-color-4 z-50 `}>
        <Logo />
        <nav className="hidden navbar  top-[5rem] left-0  right-0 bottom-0 bg-transparent
          lg:static lg:flex lg:mx-auto lg:bg-transparent w-2/5 items-center justify-center">
                 <ul className="  hidden md:flex  justify-evenly 
                  items-center justify-self-center space-x-6">
                {navigation.map(nav=>(
                    <a href={nav.href} key={nav.id}>
                        <li  className="  font-gothic text-lg font-semibold  text-color-2 
                    hover:font-semibold cursor-pointer hover:text-color-3">
                        {nav.label}
                    </li>
                    </a>
                    
                ))}
        </ul>
        </nav>
   
    </div>
  )
}
