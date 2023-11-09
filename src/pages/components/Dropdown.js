import { useEffect, useRef, useState } from "react";
import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Dropdown() {
  const designs = ["Popularity", "Newest"];
  let typeDesign = "";
  designs.map((design) => (typeDesign = design));

  const [showSelect, setShowSelect] = useState(false);
  const [selected, setSelected] = useState(typeDesign);

  let dropdownRef = useRef();

  const handleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleSelected = (design) => {
    setSelected(design);
    setShowSelect(false);
  };

  // const handleClickOutside = () => {
  //   setShowSelect(false);
  // };

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowSelect(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div
      ref={dropdownRef}
      // onClickOutSide={handleClickOutside}
      onClick={handleShowSelect}
      className={showSelect ? cx("select-down") : cx("select")}
      tabIndex={"0"}
    >
      <span className={cx("select__text")}>{selected}</span>
      {showSelect && (
        <ul className={cx("select-lists")}>
          {designs.map((design, index) => (
            <li
              key={index}
              // onClick={(e) => {
              //   setSelected(design);
              //   setShowSelect(false);
              // }}
              onClick={() => handleSelected(design)}
              className={cx(
                "select-lists__item",
                design === selected ? "active" : ""
              )}
            >
              {design}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
