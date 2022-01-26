import TopBar from "../../components/common/topBar";
import TabBar from "../../components/tabBar";
import style from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={style.container}>
      <TopBar title="Contacts" urlRight="/assets/topBar/addfriends.svg" />
      <TabBar />
    </div>
  );
}
