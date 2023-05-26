import PaginationHandler from "../components/PaginationHandler";
import LimitHandler from "../components/LimitHandler";

export default function List() {
  
  return (
    <div>
      <LimitHandler />
      <PaginationHandler />
    </div>
  );
}
