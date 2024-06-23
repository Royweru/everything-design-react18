import api from "@/actions/api";

import { useState } from "react";
import { Button } from "../ui/button";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    try {
      if (name && email && message !== "") {
        const res = await api.post("/api/email-message/", {
          name,
          email,
          message,
        });
        if (res.status === 201) {
          alert("success! Message received");
          setName("");
          setEmail("");
          setMessage("");
        }
      } else {
        alert("one field is missing please make sure to input all details");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className=" container bg-transparent  py-4 px-12 flex flex-col justify-center"
      id="reachout"
    >
      <div className=" grid md:grid-cols-2 gap-4 w-full relative">
        <div className=" col-span-1 flex flex-col gap-4 h-full">
          <input
            type="text"
            required
            placeholder="name.."
            className="input input-bordered input-success max-w-md input-lg text-color-7 font-code"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="email adress.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered input-success max-w-md text-color-7 font-code  input-lg"
          />
        </div>
        <div className=" col-span-1 w-full h-full flex justify-center items-center">
          <textarea
            className="textarea textarea-primary text-color-7 font-code  textarea-lg w-full"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Make an order! leave a comment, say anything..."
          ></textarea>
        </div>
      </div>

      <div className=" mt-5 w-full flex justify-center items-center">
        <Button
          variant="ghost"
          onClick={onSubmit}
          className=" font-semibold text-primary hover:text-secondary"
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};
