import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="h-screen bg-gray-300 text-center py-24 cursor-pointer">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
        Punk Beers
      </h1>
      <p className="mt-12 text-1xl md:text-2xl italic font-bold">
        your place to order beers
      </p>
      <div className="mt-16 font-bold">
        <Link to="list">
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 w-12 p-3 px-5 rounded-md">
            🍺 Beers
          </span>
        </Link>
      </div>
    </div>
  );
}
