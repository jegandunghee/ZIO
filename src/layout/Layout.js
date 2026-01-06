import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import GnbDesktop from "../components/common/GnbDesktop";
import GnbMobile from "../components/common/GnbMobile";
const Layout = () => {
  return (
    <div id="app">
      <Header />
        <GnbDesktop />
      <main>
        <Outlet />
      </main>
      
      <Footer/>
        <GnbMobile />
    </div>
  );
};

export default Layout;
