import style from "./Sidebar.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-links")}></div>
      <div className={cx("sidebar-bottom")}></div>
    </div>
  );
}

export default Sidebar;
