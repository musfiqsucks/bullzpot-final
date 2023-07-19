import { Outlet } from "react-router-dom";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
