import TopBar from "../../components/common/topBar";
import TabBar from "../../components/tabBar";
import style from "./discover.module.css";

export default function Discover() {
  return (
    <div className={style.container}>
      <TopBar title="Discover" />
      <TabBar />
    </div>
  );
}
