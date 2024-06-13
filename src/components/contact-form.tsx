import { useState } from "react";

import GradientButton from "./shared/gradient-button";
import fs from "fs";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isErr, setIsErr] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      fs.writeFile("..", message, (err) => {
        if (err) console.error(err);
      });
      fs.writeFile("../emails/clients.txt", name, (err) => {
        if (err) console.error(err);
      });
      setIsSuccess("Your message was gladly received, thanks");
    } catch (e) {
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
          <label
            htmlFor=""
            className=" font-gothic text-xs font-semibold text-color-2 text-centers"
          >
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
            disabled={isLoading}
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor=""
            className=" 
        font-gothic 
        text-xs font-semibold text-color-2
         text-center
          tracking-wide italic
         "
          >
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
            disabled={isLoading}
          />
        </div>
      </div>

      <div className=" w-full p-12">
        <textarea
          value={message}
          placeholder=" Leave a message, make an order!.."
          onChange={(e) => setMessage(e.target.value)}
          className=" rounded-md p-10  w-full 
          text-color-2 bg-n-4 font-gothic font-semibold text-xl
          focus:outline-k-4  border-transparent tracking-wide italic
          "
          disabled={isLoading}
        />
      </div>
      <div className=" w-ful px-24 flex justify-center items-center">
        <GradientButton
          content="SUBMIT"
          onClick={onSubmit}
          className={" "}
          disabled={isLoading}
        />
      </div>
      {isSuccess && (
        <div
          className=" flex w-full bg-emerald-300 text-color-2 rounded-md
            justify-center items-center text-center italic  font-semibold font-grotesk"
        >
          {isSuccess}
        </div>
      )}
      {isErr && (
        <div
          className=" flex w-full bg-rose-700 text-color-2
            justify-center items-center text-center  italic font-semibold font-grotesk"
        >
          {isErr}
        </div>
      )}
    </div>
  );
};
