import style from "./MobileHeader.module.scss";
import classNames from "classnames/bind";

import Logo from "../../../components/icons/Logo/Logo";
import { useState } from "react";

const cx = classNames.bind(style);

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <a className={cx("mobile-logo")} href="#">
        <Logo className={cx("mobile-logo__logo")} />
      </a>
      <div className={cx("mobile-header")}></div>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        id="nav-icon"
        className={showMenu ? cx("nav-icon-x") : cx("nav-icon")}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={cx("full-menu", "animated", "fadeIn")}>
        <ul>
          <li className={cx("animated", "fadeIn")}>
            <a href="#">Design</a>
          </li>
          <li className={cx("animated", "fadeIn")}>
            <a href="#">Designers</a>
          </li>
          <li className={cx("animated", "fadeIn")}>
            <a href="#">Challenges</a>
          </li>
          <li className={cx("animated", "fadeIn")}>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileHeader;
