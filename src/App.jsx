import PreNav from "./components/PreNav";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <PreNav access={"Guest Access"} />
      <Nav />
      <Outlet />
    </>
  );
}
