import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.getItem("theme") !== "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [localStorage.getItem("theme")]);
  return (
    <ul className="flex w-screen bg-gray-900 h-12 items-center p-4 text-white font-bold uppercase text-sm ">
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li className="ml-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
        <Link to="/list">List</Link>
      </li>
      <div className="w-full flex justify-end items-center mr-16">
        <li
          className="mx-5 cursor-pointer"
          onClick={() => {
            localStorage.getItem("theme") !== "dark"
              ? localStorage.setItem("theme", "dark")
              : localStorage.setItem("theme", "light");
            dark ? setDark(false) : setDark(true);
            localStorage.getItem("theme") !== "dark"
              ? document.querySelector("html").classList.add("dark")
              : document.querySelector("html").classList.remove("dark");
          }}
        >
          {dark ? (
            <MdOutlineWbSunny size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>
    </ul>
  );
}
