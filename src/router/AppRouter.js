import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../pages/App";
import List from "../pages/List";
import Beer from "../pages/Beer";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="list" element={<List />}/>
      <Route path="/beer/:beerId" element={<Beer />} />
    </Routes>
  );
};

export default AppRouter;
