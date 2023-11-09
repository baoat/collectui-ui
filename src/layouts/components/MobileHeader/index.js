import style from "./MobileHeader.module.scss";
import classNames from "classnames/bind";

import Logo from "../../../components/icons/Logo/Logo";

const cx = classNames.bind(style);

function MobileHeader() {
  return (
    <>
      <a className={cx("mobile-logo")} href="#">
        <Logo className={cx("mobile-logo__logo")} />
      </a>
      <div className={cx("mobile-header")}></div>
      <label id="nav-icon" className={cx("nav-icon")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
}

export default MobileHeader;
