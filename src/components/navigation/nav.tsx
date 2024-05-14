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
      label:"Featured",
      href:"#featured"
  },
   
    {
        id:3,
        label:"Services",
        href:"#services"
    },
    {
        id:4,
        label:"Product",
        href:"#product"
    },

    {
        id:5,
        label:"Contact",
        href:"#reachout"
    },
]
export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [state, setState] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust 50 to your preferred scroll position
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
    <div className={` ${scrolled? ' bg-n-9 opacity-95 hidden md:flex':''}  w-full h-max
    font-code font-bold py-3 px-2  border-b-[0.5px] flex  border-k-4 
    justify-between top-0 fixed lg:backdrop-blur-sm bg-n-4 z-50 `}>
     
        <Logo />
        <nav className=" bg-transparent relative w-full md:static h-full mt-5">
          <div className="items-center h-full justify-center px-4  w-max mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
               
                  <div className="md:hidden">
                      <button className="text-k-1 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className=" text-color-2 hover:text-indigo-600">
                                    <a href={item.href}>
                                        { item.label }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              {/* <div className="hidden md:inline-block">
                <a href="javascript:void(0)" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                    Get Started
                </a>
              </div> */}
          </div>
      </nav>
    </div>
  )
}
