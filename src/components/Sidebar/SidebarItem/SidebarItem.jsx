import { Link, useLocation } from "react-router-dom";

import styles from "./sidebarItem.module.scss";

const SidebarItem = (props) => {
  const location = useLocation();

  const { item, className } = props;

  const getClassName = () => {
    const classNames = [];
    classNames.push(className);
    classNames.push(styles.sidebarItem);
    if (location.pathname === item?.to) {
      classNames.push(styles.active);

      if (item?.label === "support") {
        classNames.push(styles.active_stroke);
      }
    }
    return classNames.join(" ");
  };

  return (
    <Link className={getClassName()} to={item?.to}>
      <div>
        <span>{item?.icon} </span>
        <span>{item?.label}</span>
      </div>
      {item.notifications && (
        <div className={styles.notifications}>{item.notifications}</div>
      )}
    </Link>
  );
};

export default SidebarItem;
