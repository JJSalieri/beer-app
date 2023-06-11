import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Card(props) {
  const [isCart, setCart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items") || "[]");
    data.forEach((item) => {
      if (item === props.name) {
        setCart(true);
      }
    });

    data.forEach((x) => {
      if (x.name === props.name) {
        setCount(x.count);
      }
    });
  }, []);

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
          setCount(count + 1);
          old.push({
            name: props.name,
            count: count,
          });
          if (count !== 0) {
            old.forEach((x) => {
              if (x.name === props.name) {
                old.splice(old.indexOf(x), 1);
              }
            });
          }

          setCart(true);
          localStorage.setItem("items", JSON.stringify(old));
        }}
      >
        {isCart ? `in the cart: ${count}` : "add to cart"}
      </button>
    </div>
  );
}
