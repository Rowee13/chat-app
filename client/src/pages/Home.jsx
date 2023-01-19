import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-slate-50 w-screen h-screen overflow-hidden py-24">
      <div className="w-3/12 font-outfit">
        <div className="flex flex-col justify-center items-center pb-10">
          <img src={Logo} alt="chat logo" className="w-24 h-24" />
          <h1 className="font-bold text-3xl pt-8">Welcome to Chat App</h1>
          <p>Stay close to your favorite people</p>
        </div>
        <form>
          <div className="flex flex-col pb-3">
            <label htmlFor="username" className="text-slate-700 text-sm">
              Username<sup className="text-red-700">*</sup>
            </label>
            <input required className="w-full py-2 px-4 rounded-md" />
          </div>
          <div className="flex flex-col pb-10">
            <label htmlFor="password" className="text-slate-700 text-sm">
              Password<sup className="text-red-700">*</sup>
            </label>
            <input required className="w-full py-2 px-4 rounded-md" />
          </div>
          <button className="bg-sky-500 w-full py-3 rounded-md uppercase font-bold text-slate-50 hover:bg-sky-600">
            Login
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center pt-14">
        <p className="text-sm">Don't have an account yet?</p>
        <Link
          to="/signup"
          className="mt-3 py-3 px-7 rounded-md uppercase font-semibold hover:text-sky-800 hover:bg-slate-200"
        >
          Signup here
        </Link>
      </div>
    </div>
  );
};

export default Home;
