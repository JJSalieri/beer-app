import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <ul className="flex w-screen bg-gray-900 h-12 items-center p-4 text-white font-bold uppercase text-sm ">
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li className="ml-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
        <Link to="/list">List</Link>
      </li>
      <div className="w-full flex justify-end mr-16">
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>
    </ul>
  );
}
