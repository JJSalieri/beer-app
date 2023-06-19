import AppRouter from "../router/AppRouter";
import Nav from "../components/Navigation";

export default function Layout() {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <Nav />
      <AppRouter />
    </div>
  );
}
