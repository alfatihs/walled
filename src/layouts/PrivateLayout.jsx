import { Outlet } from "react-router";
import Navbar from "../components/Navbar";



function PrivateLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default PrivateLayout;
