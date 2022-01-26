import TabBar from "../../components/tabBar";
import style from "./me.module.css";

export default function Me() {
  return (
    <div className={style.container}>
      <div className="top"></div>
      me
      <TabBar />
    </div>
  );
}
