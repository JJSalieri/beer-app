import CardList from "./CardList";
import { useState } from "react";

export default function PaginationHandler() {
  const [Limit, setLimit] = useState(15);
  const [Page, setPage] = useState(1);
  const pages = 405 / Limit;
  const pagelist = [];
  for (let i = 1; i <= pages; i++) {
    pagelist.push(i);
  }

  return (
    <div>
      <select
        name="beers"
        className="mt-8 ml-12 p-2 cursor-pointer"
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      >
        <option value={15}>15</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
      </select>
      <CardList limit={Limit} page={Page}/>
      <div className="w-screen flex justify-center my-8 flex-wrap">{pagelist.map((page) =>{
        return <span key={page} className={`mx-2 my-1 cursor-pointer ${page === Page? 'bg-slate-400':'bg-slate-300'} py-1 px-2`} onClick={() => setPage(page)}>{page}</span>
      })}</div>
    </div>
  );
}
