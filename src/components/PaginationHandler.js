import { useState, useEffect } from "react";
import { BsGrid1X2 } from "react-icons/bs";
import CardList from "./CardList";

export default function PaginationHandler() {
  const [limit, setLimit] = useState(15);
  const [Page, setPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const pages = 325 / limit;
  const pagelist = [];
  for (let i = 1; i <= pages; i++) {
    pagelist.push(i);
  }
  return (
    <div>
      <div>
        <select
          name="beers"
          className="mt-8 ml-12 p-2 cursor-pointer dark:bg-gray-900"
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        >
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
        </select>
        <select
          name="layout"
          className="mt-8 ml-12 p-2 cursor-pointer dark:bg-gray-900"
          onChange={(e) => {
            setLayout(e.target.value);
          }}
        >
          <option value={"grid"}>grid</option>
          <option value={"list"}>list</option>
        </select>
      </div>
      <CardList page={Page} limit={limit} layout={layout} />
      <div className="w-screen flex justify-center my-8 flex-wrap">
        {pagelist.map((page) => {
          return (
            <span
              key={page}
              className={`mx-2 my-1 cursor-pointer ${
                page === Page ? "bg-slate-400 dark:bg-slate-600" : "bg-slate-300 dark:bg-slate-500"
              } py-1 px-2`}
              onClick={() => setPage(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
}
