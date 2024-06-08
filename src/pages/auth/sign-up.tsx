import api from "@/actions/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const res = await api.post("/api/user/register/", {
        username,
        password,
        email,
      });
      if (res.status === 201) {
        alert(`successfully registered ${res.data.username}`);
      } else {
        alert("Something went wrong");
      }
      navigate("/auth/login");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <div
      className=" font-semibold text-xl font-gothic min-h-screen bg-gradient-to-bl from-n-2
     via-n-9 to-n-5 flex flex-col justify-center items-center"
    >
      <div className=" w-full text-center text-4xl text-color-3 font-code font-semibold tracking-wide my-5">
        Register User
      </div>
      <div className=" bg-n-3 p-5 rounded-xl max-w-2xl backdrop-blur-md shadow">
        <div className=" w-full flex flex-col gap-y-3">
          <div className=" w-full">
            <input
              type="text"
              placeholder="username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" p-3 w-full relative rounded-xl border-white 
              focus:border-transparent text-sm text-color-2 font-serif font-semibold"
            />
          </div>
          <div className=" w-full">
            <input
              type="email"
              placeholder="email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" p-3 w-full relative rounded-xl border-white 
              focus:border-transparent text-sm font-serif text-color-2 font-semibold"
            />
          </div>
          <div className=" w-full">
            <input
              type="password"
              placeholder=" password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" p-3 w-full relative rounded-xl border-white 
              focus:border-transparent text-sm font-serif text-color-2 font-semibold"
            />
          </div>
          <div className=" w-full px-10 flex justify-center items-center">
            <button
              className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition 
            duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
              onClick={onSubmit}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
