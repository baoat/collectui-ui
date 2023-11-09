import style from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx("header")}>
      <div></div>
      <div className={cx("header-links")}>
        <a href="#">About</a>
        <a href="#">Newsletter</a>
        <a href="#" className={cx("no-hover")}>
          <span className={cx("link-daily")}>Daily Designer Inspiration</span>
          <span className={cx("link-new")}>NEW</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
