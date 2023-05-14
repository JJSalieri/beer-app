import AppRouter from "../router/AppRouter";
import Nav from "../components/Navigation";

export default function Layout() {
  return (
    <>
      <Nav />
      <AppRouter />
    </>
  );
}
