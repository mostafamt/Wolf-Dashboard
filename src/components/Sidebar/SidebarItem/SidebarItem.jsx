import { Link } from "react-router-dom";

import styles from "./sidebarItem.module.scss";
const SidebarItem = (props) => {
  const { item } = props;
  return (
    <Link className={styles.sidebarItem} to={item?.to}>
      <span>{item?.icon} </span>
      <span>{item?.label}</span>
    </Link>
  );
};

export default SidebarItem;
