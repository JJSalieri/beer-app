

export default function Cart() {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  return (
    <dialog id="cart" className="absolute mt-12 h-[300px] w-64">
      <h1 className="font-bold mt-5 ml-5 text-xl">Your Cart</h1>
      {items.map((item) => {
        return (
          <div key={item} id={item} className="mt-3 ml-5">
            <button
              onClick={() => {
                items.splice(items.indexOf(item), 1);
                localStorage.setItem("items", JSON.stringify(items));
                document.getElementById(item).style.display = "none";
              }}
            >
              remove
            </button>{" "}
            <span>{item}</span>
          </div>
        );
      })}
      <button className="absolute top-0 right-0 m-2 text-xl">X</button>
    </dialog>
  );
}
