import AppRouter from "../router/AppRouter";
import Nav from "../router/Navigation";

export default function Layout() {
  return (
    <>
      <Nav />
      <AppRouter />
    </>
  );
}
