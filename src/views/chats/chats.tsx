import TopBar from "../../components/common/topBar";
import TabBar from "../../components/tabBar";
import style from "./chats.module.css";

export default function Chats() {
  return (
    <div className={style.container}>
      <TopBar title="Chats" urlRight="/assets/topBar/add.svg" />
      <TabBar />
    </div>
  );
}
