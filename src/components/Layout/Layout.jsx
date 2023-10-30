import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles["main-wrapper"]}>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
