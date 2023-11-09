import style from "./Logo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Logo({ className }) {
  return <i className={cx(className)}></i>;
}

export default Logo;
