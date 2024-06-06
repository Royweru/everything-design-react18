import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className=" font-semibold text-xl font-gothic min-h-screen bg-gradient-to-bl from-n-2
     via-n-9 to-n-5 flex flex-col justify-center items-center"
    >
      <div className=" w-full text-center text-4xl text-color-3 font-code font-semibold tracking-wide my-5">
        Login User
      </div>
      <div className=" bg-n-3 p-5 rounded-xl ">
        <div className=" w-full flex flex-col gap-y-3">
          <div className=" w-full">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" p-3 w-full relative rounded-xl border-white 
              focus:border-transparent text-sm font-gothic font-semibold text-white"
            />
          </div>
          <div className=" w-full">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" p-3 w-full relative rounded-xl border-white 
              focus:border-transparent text-sm text-white font-gothic font-semibold"
            />
          </div>
          <div className=" w-full">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" p-3 w-full relative rounded-xl border-white 
              focus:border-transparent text-sm text-white font-gothic font-semibold"
            />
          </div>
          <div className=" w-full px-10">
            <button
              className="px-8 py-2 rounded-md
             bg-teal-500 text-white font-bold transition duration-200
              hover:bg-white hover:text-black border-2 border-transparent
               hover:border-teal-500 flex justify-center"
            >
              Log in
            </button>
          </div>
          <div
            className=" w-full px-auto  text-center
          "
          >
            <a href="/auth/sign-up">
              <p className=" hover:underline text-xs cursor-pointer font-gothic text-color-4">
                No account? create one
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
