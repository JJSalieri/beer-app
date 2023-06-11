import { useState, useEffect } from "react";

export default function Item(props) {
  const item = props.item;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items") || "[]");
    data.forEach((x) => {
      if (x.name === props.item.name) {
        setCount(x.count);
      }
    });
  }, []);

  return (
    <div key={item} id={item.name} className="mt-3 ml-5">
      <button
        onClick={() => {
          const old = JSON.parse(localStorage.getItem("items") || "[]");
          setCount(count - 1);
          old.push({
            name: item.name,
            count: count,
          });

          old.forEach((x) => {
            if (x.name === item.name) {
              old.splice(old.indexOf(x), 1);
            }
          });

          if (count === 0) {
            old.splice(old.indexOf(item), 1);
            document.getElementById(item.name).style.display = "none";
          }
          localStorage.setItem("items", JSON.stringify(old));
        }}
        className="bg-[#f00] font-bold text-white p-2 rounded-lg"
      >
        remove
      </button>
      <span className="font-bold">
        {item.name} ( {count + 1} )
      </span>
    </div>
  );
}
