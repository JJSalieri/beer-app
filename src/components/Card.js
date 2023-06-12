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
    <div className="border shadow-sm hover:shadow-md border-1 w-64 text-center cursor-pointer">
      <Link to={`/beer/${props.id}`}>
        <div className="flex justify-center pt-5">
          <img src={props.img} alt={props.name} className="h-48" />
        </div>
        <h1 className="pt-5 pb-1 text-lg font-bold">{props.name}</h1>
      </Link>
      <h2 className="pb-1 text-sm">{props.tagline}</h2>
      <h3 className="text-sm">
        since <span className=" font-semibold"> {props.first}</span>
      </h3>
      <button
        className={`mt-3 pb-2 text-black`}
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
        {isCart ? (
          <div className="absolute -mt-[330px] ml-32 h-8 w-8 bg-[#000000] rounded-3xl">
            <div className="mt-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              {count}
            </div>
          </div>
        ) : (
          ""
        )}
        add to cart
      </button>
    </div>
  );
}
