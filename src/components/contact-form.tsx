import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className=" grid md:grid-cols-2 gap-4 w-full">
      <div className=" flex flex-col gap-y-7 px-12">
        <div className=" w-full">
          <label htmlFor="" className=" font-gothic   text-xs font-semibold text-color-2 text-centers">
            Name
          </label>
          <input
            type="text"
            placeholder=" Enter your name.."
            className=" rounded-md  focus:outline-k-4 border-transparent border-[1.5px]
              p-6 w-full  text-color-2 bg-n-4  font-gothic font-semibold text-xl tracking-wide"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=" w-full">
        <label htmlFor=""  className=" font-gothic text-xs font-semibold text-color-2 text-center">
            Email
          </label>
          <input
            type="text"
            placeholder=" Enter your email.."
            className=" rounded-md p-6 focus:outline-k-4  border-transparent border-color-1 border-2
              w-full  text-color-2 bg-n-4 font-gothic font-semibold text-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
      </div>

      <div className=" w-full p-12">
        <textarea
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className=" rounded-md p-10  w-full 
          text-color-2 bg-n-4 font-gothic font-semibold text-xl
          focus:outline-k-4  border-transparent
          "
          />
      </div>
    </div>
  );
};
