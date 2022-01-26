import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./topBar.module.css";

interface ITopBarProps {
  urlLeft?: string;
  title?: string;
  urlRight?: string;
}

const TopBar: React.FC<ITopBarProps> = ({ urlLeft, title, urlRight }) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      {urlLeft ? (
        <img
          className={style.leftImg}
          src={urlLeft}
          alt=""
          width="22px"
          onClick={() => {
            navigate(-1);
          }}
        />
      ) : (
        ""
      )}
      <header>{title}</header>
      {urlRight ? <img className={style.rightImg} src={urlRight} alt="" width="22px" /> : ""}
    </div>
  );
};

export default TopBar;
