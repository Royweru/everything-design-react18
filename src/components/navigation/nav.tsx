import { Logo } from "./logo"

const navigation = [
    {
        id:1,
        label:"Home"
    },
    {
        id:2,
        label:"About"
    },
    {
        id:3,
        label:"Services"
    },
    {
        id:4,
        label:"Product"
    },
]
export const Nav = () => {
  return (
    <div className=' w-full font-code font-bold py-5 px-2 flex border-b-[0.5px] border-color-1 justify-between'>
        <Logo />
        <ul className="  hidden md:flex  justify-evenly w-2/4 items-center justify-self-center ">
                {navigation.map(nav=>(
                    <a href="" key={nav.id}>
                        <li  className="  font-gothic text-lg  font-medium text-color-1 
                    hover:font-semibold cursor-pointer">
                        {nav.label}
                    </li>
                    </a>
                    
                ))}
        </ul>
    </div>
  )
}
