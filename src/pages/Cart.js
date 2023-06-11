import Item from "../components/Item";

export default function CartPage() {
  const items = JSON.parse(localStorage.getItem("items") || "[]");

  return (
    <div>
      <h1 className="font-bold mt-5 ml-5 text-xl">Your Cart</h1>
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
}
