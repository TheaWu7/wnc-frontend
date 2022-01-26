import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./tabBar.module.css";

export default function TabBar() {
  const [onClick, setOnCLick] = useState(true);
  const tabBarList = [
    {
      name: "WeNotChat",
      icon: "/assets/tabBar/chats.svg",
      activeIcon: "/assets/tabBar/chats-click.svg",
      url: "/chats",
    },
    {
      name: "Contacts",
      icon: "/assets/tabBar/contacts.svg",
      activeIcon: "/assets/tabBar/contacts-click.svg",
      url: "/contacts",
    },
    {
      name: "Discover",
      icon: "/assets/tabBar/discover.svg",
      activeIcon: "/assets/tabBar/discover-click.svg",
      url: "/discover",
    },
    {
      name: "Me",
      icon: "/assets/tabBar/me.svg",
      activeIcon: "/assets/tabBar/me-click.svg",
      url: "/me",
    },
  ];
  return (
    <div className={style.container}>
      {tabBarList.map((v) => {
        return (
          <Link to={v.url} key={v.name} className={style.tabItem}>
            <img src={onClick ? v.icon : v.activeIcon} alt="" width="30px" />
            <span className={style}>{v.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
