import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isErr, setIsErr] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  

  const onSubmit = async () => {
    const templateParams = {
      from_name: email,
      to_name: "Roy Matheri",
      message,
    };
    try {
      setIsLoading(true);
      if(!name) setIsErr("Name is required!")
      if(!email) setIsErr("Email is required!")
      if(!message) setIsErr("Message is required!")
      if(name &&email &&message){
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        );
        setIsSuccess(
          `Your messsage has been successfully submitted, thanks for the outreach ${name.toUpperCase()},we will be in touch`
        );
       setName("")
        setEmail("");
        setMessage("");
      }
    
    } catch (e:any) {
      setIsErr(e);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
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
            className=" rounded-md 
             focus:outline-k-4
             border-transparent border-[1.5px]
              p-6 w-full  text-color-2 bg-n-4 
               font-gothic font-semibold
                text-xl 
                tracking-wide"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=" w-full">
        <label htmlFor=""  className=" 
        font-gothic 
        text-xs font-semibold text-color-2
         text-center
          tracking-wide italic
         ">
            Email
          </label>
          <input
            type="text"
            placeholder=" Enter your email.."
            className=" rounded-md p-6
             focus:outline-k-4 
             border-transparent
              border-color-1 border-2
              w-full  text-color-2 bg-n-4 
              font-gothic font-semibold 
              text-xl tracking-wide italic"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
      </div>

      <div className=" w-full p-12">
        <textarea
          value={message}
          placeholder=" Leave a message, make an order!.."
          onChange={(e)=>setMessage(e.target.value)}
          className=" rounded-md p-10  w-full 
          text-color-2 bg-n-4 font-gothic font-semibold text-xl
          focus:outline-k-4  border-transparent tracking-wide italic
          "
          />
      </div>
    </div>
  );
};
