import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Card(props) {
  const [isCart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  const [layout, setLayout] = useState("grid");
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

    setLayout(props.layout);
  }, [props.layout]);

  return (
    <div
      className={
        layout === "grid"
          ? ` border shadow-sm dark:border-none hover:shadow-md border-1 w-64 text-center cursor-pointer mx-auto dark:bg-gray-700`
          : ` border shadow-sm dark:border-gray-900 hover:shadow-md border-1 w-full flex text-center cursor-pointer mx-auto my-12`
      }
    >
      <Link to={`/beer/${props.id}`}>
        <div className="flex justify-center pt-5">
          <img
            src={props.img}
            alt={props.name}
            className={layout === "grid" ? `h-48` : `ml-5 h-36`}
          />
        </div>
      </Link>
      <div
        className={
          layout === "grid"
            ? ``
            : `md:flex md:items-center justify-center w-full`
        }
      >
        <div className={layout === "grid" ? `` : `mx-auto`}>
          <Link to={`/beer/${props.id}`}>
            <h1 className="pt-5 pb-1 text-lg font-bold">{props.name}</h1>
            <h2 className="pb-1 text-sm">{props.tagline}</h2>
            <h3 className="text-sm">
              since <span className=" font-semibold"> {props.first}</span>
            </h3>
          </Link>
        </div>

        <button
          className={
            layout === "grid"
              ? `mt-3 pb-2 text-black dark:text-white`
              : `mx-auto bg-yellow-300 p-2 rounded-md font-bold dark:text-black`
          }
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
    </div>
  );
}
