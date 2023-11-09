import style from "./Layout.module.scss";
import className from "classnames/bind";

import Aside from "../components/Aside/index.js";
import Footer from "../components/Footer/index.js";
import Header from "../components/Header/index.js";
import MobileHeader from "../components/MobileHeader/index.js";
import Sidebar from "../components/Sidebar/index.js";
import Design from "../../pages/Design";

const cx = className.bind(style);

function Layout({ child }) {
  return (
    <div className={cx("grid")}>
      <Aside />
      <Header />
      <MobileHeader />
      {/* <div className={cx("child")}>{child}</div> */}
      <Design />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default Layout;
