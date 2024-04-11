import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    if (text.trim() === "") {
      return;
    }
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="w-[50px]" src="/public/logo.png" alt="mainLogo" />
        <h1 className="text-2xl max-sm:hidden font-semibold">YouTube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex items-center border border-white rounded-[15px] overflow-hidden "
      >
        <input
          placeholder="Search."
          className="group-hover:border-blue-500 group-hover:border border-transparent w-24 md:w-72 bg-black text-white px-3 py-1 outline-non rounded-l-[20px] focus:border-blue-500 "
          type="text"
        />
        <button className=" border-l px-4 py-2 text-lg bg-zinc-800 ">
          <FaSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-700 transition duration-300" />
        <FaVideo className="hover:text-gray-700 transition duration-300" />
        <BiSolidVideos className="hover:text-gray-700 transition duration-300" />
      </div>
    </header>
  );
};

export default Header;
