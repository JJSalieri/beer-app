import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LimitHandler() {
  const [limit, setLimit] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams();
    // if (limit) {
      params.append("limit", limit);
    // } else {
    //   params.delete("limit");
    // }
    navigate({ search: params.toString() });
  }, [limit]);
  
  return (
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
  );
}
