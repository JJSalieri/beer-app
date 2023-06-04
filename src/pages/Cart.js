

export default function CartPage() {
  const items = JSON.parse(localStorage.getItem("items") || "[]");

  return (
    <div>
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
              className="bg-[#f00] font-bold text-white p-2 rounded-lg"
            >
              remove
            </button>{" "}
            <span className="font-bold">{item}</span>
          </div>
        );
      })}
    </div>
  );
}
