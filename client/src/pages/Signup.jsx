import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFormInput = (e) => {
    setSignupInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3001/auth/signup", {
        username: signupInput.username,
        firstName: signupInput.firstName,
        lastName: signupInput.lastName,
        email: signupInput.email,
        password: signupInput.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then(() => navigate("/"));
  };

  return (
    <div className="flex flex-col justify-between items-center bg-slate-50 w-screen h-screen overflow-hidden py-14">
      <div className="w-3/12 font-outfit">
        <div className="flex flex-col justify-center items-center pb-5">
          <img src={Logo} alt="chat logo" className="w-24 h-24" />
          <h1 className="font-bold text-3xl pt-4">Create an account</h1>
          <p>Connect with your favorite people</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col pb-2">
            <label htmlFor="username" className="text-slate-700 text-sm">
              Username<sup className="text-red-700">*</sup>
            </label>
            <input
              name="username"
              onChange={handleFormInput}
              required
              className="w-full py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-row gap-x-3">
            <div className="flex flex-col pb-2">
              <label htmlFor="firstname" className="text-slate-700 text-sm">
                First Name<sup className="text-red-700">*</sup>
              </label>
              <input
                name="firstName"
                onChange={handleFormInput}
                required
                className="w-full py-2 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col pb-2">
              <label htmlFor="lastname" className="text-slate-700 text-sm">
                Last Name<sup className="text-red-700">*</sup>
              </label>
              <input
                name="lastName"
                onChange={handleFormInput}
                required
                className="w-full py-2 px-4 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="email" className="text-slate-700 text-sm">
              Email<sup className="text-red-700">*</sup>
            </label>
            <input
              name="email"
              onChange={handleFormInput}
              required
              type="email"
              className="w-full py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="password" className="text-slate-700 text-sm">
              Password<sup className="text-red-700">*</sup>
            </label>
            <input
              name="password"
              onChange={handleFormInput}
              required
              type="password"
              className="w-full py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col pb-8">
            <label
              htmlFor="confirm-password"
              className="text-slate-700 text-sm"
            >
              Confirm Password<sup className="text-red-700">*</sup>
            </label>
            <input
              name="confirmPassword"
              required
              type="password"
              className="w-full py-2 px-4 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 w-full py-3 rounded-md uppercase font-bold text-slate-50 hover:bg-sky-600"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center pt-14">
        <p className="text-sm">Already have an account?</p>
        <Link
          to="/"
          className="mt-3 py-3 px-7 rounded-md uppercase font-semibold hover:text-sky-800 hover:bg-slate-200"
        >
          Login here
        </Link>
      </div>
    </div>
  );
};

export default Signup;
