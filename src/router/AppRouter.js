import { Routes, Route } from "react-router-dom";
import App from "../pages/App";
import List from "../pages/List";
import Beer from "../pages/Beer";
import CartPage from "../pages/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="list" element={<List />}/>
      <Route path="/beer/:beerId" element={<Beer />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRouter;
