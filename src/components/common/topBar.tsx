import { useNavigate } from "react-router-dom";
import style from "./topBar.module.css";

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <img
        src="/assets/topBar/arrow-left.svg"
        alt=""
        width="22px"
        onClick={() => {
          navigate(-1);
        }}
      />
      <header>Contacts</header>
      <img src="/assets/topBar/add.svg" alt="" width="24px" />
    </div>
  );
}
