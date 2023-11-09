import { useState } from "react";
import style from "./Design.module.scss";
import classNames from "classnames/bind";
import { type } from "@testing-library/user-event/dist/type";
import Dropdown from "../components/Dropdown";

const cx = classNames.bind(style);

function Design() {
  const designs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className={cx("design")}>
      <h1>Design ({designs.length})</h1>
      <div className={cx("design-descr")}>
        You can see the designs from the ui challenge below, we extended it with
        the components we found, updating daily. See{" "}
        <a className={cx("stats")}>stats</a> for frequency.
        <div className={cx("descr__sort")}>
          <span>Sort by: </span>
          <Dropdown />
        </div>
      </div>
      <div className={cx("design-lists")}>
        {designs.map((design, index) => (
          <div key={index} className={cx("item")}>
            <a href="#" className={cx("item-link")}>
              <img src="" alt="" width={"100%"} height={"90%"} />
              <div className={cx("item-player")}>
                <a className={cx("player")}>Landing page</a> by{" "}
                <a className={cx("player")}>Oxana Khazhieva</a>
              </div>
            </a>
          </div>
        ))}
        <div className={cx("pandabar")}>
          <div className={cx("list-blank")}>
            <a className={cx("lists-blank__item")} href="#">
              🙌 Screen Studio
            </a>
            <a className={cx("lists-blank__item")} href="#">
              🙌 Screen Studio
            </a>
            <a className={cx("lists-blank__item")} href="#">
              🙌 Screen Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
