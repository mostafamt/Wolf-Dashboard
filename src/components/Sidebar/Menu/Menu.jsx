import React from "react";
import { BiHomeAlt, BiPackage, BiStore } from "react-icons/bi";
import { BsCart2, BsGear } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import SidebarItem from "../SidebarItem/SidebarItem";

import styles from "./menu.module.scss";

const SIDEBAR_ITEMS = [
  {
    icon: <BiHomeAlt />,
    label: "home",
    to: "/",
  },
  {
    icon: <BiPackage />,
    label: "product",
    to: "/products",
  },
  {
    icon: <BsCart2 />,
    label: "orders",
    to: "/orders",
  },
  {
    icon: <FiUsers />,
    label: "customers",
    to: "/customers",
  },
  {
    icon: <BiStore />,
    label: "supplier",
    to: "/suppliers",
  },
  {
    icon: <RiAdvertisementLine />,
    label: "ad & banner",
    to: "/ads",
  },
  {
    icon: <RiAdvertisementLine />,
    label: "stats",
    to: "/stats",
  },
  {
    icon: <BsGear />,
    label: "settings",
    to: "/settings",
  },
  {
    icon: <CiLogout />,
    label: "support",
    to: "/support",
  },
];

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        {SIDEBAR_ITEMS.map((item, idx) => (
          <li key={idx}>
            <SidebarItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
