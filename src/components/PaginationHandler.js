import { useState, useEffect } from "react";
import CardList from "./CardList";

export default function PaginationHandler() {
  const [limit, setLimit] = useState(15);
  const [Page, setPage] = useState(1);

   

  useEffect(() => {
     const params = new URLSearchParams(document.location.search);
    setLimit(params.get("limit"));
  }); 

  const pages = 325 / limit;
  const pagelist = [];
  for (let i = 1; i <= pages; i++) {
    pagelist.push(i);
  }
  return (
    <div>
      <CardList page={Page} limit={limit} />
      <div className="w-screen flex justify-center my-8 flex-wrap">
        {pagelist.map((page) => {
          return (
            <span
              key={page}
              className={`mx-2 my-1 cursor-pointer ${
                page === Page ? "bg-slate-400" : "bg-slate-300"
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
