import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card(props) {
  const [isCart, setCart] = useState(false);

  return (
    <div className="bg-slate-200 w-72 text-center">
      <Link to={`/beer/${props.id}`}>
        <div className="flex justify-center pt-5 cursor-pointer">
          <img src={props.img} alt={props.name} className="h-64" />
        </div>
        <h1 className="pt-5 pb-5 text-2xl font-bold cursor-pointer">
          {props.name}
        </h1>
      </Link>
      <h2 className="px-3 pb-1 text-sm font-semibold ">{props.tagline}</h2>
      <h3 className="text-sm font-semibold">since {props.first}</h3>
      <button
        className={`mt-3 pb-2 ${isCart ? "text-[#04cc0a]" : "text-black"}`}
        onClick={() => {
          const old = JSON.parse(localStorage.getItem("items") || "[]");
          old.push(props.name);
          const uniqueItems = [];
          old.forEach((c) => {
            if (!uniqueItems.includes(c)) {
              uniqueItems.push(c);
            }
          });
          setCart(true);
          localStorage.setItem("items", JSON.stringify(uniqueItems));
        }}
      >
        {isCart ? <Link to='/cart'>successfully added</Link> : "add to cart"}
      </button>
    </div>
  );
}
