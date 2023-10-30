// import Logo from "../../assets/logoo 1 1.svg";
import { BiHomeAlt, BiPackage, BiStore } from "react-icons/bi";
import { BsCart2, BsGear } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import styles from "./sidebar.module.scss";
import { CiLogout } from "react-icons/ci";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <Menu />
    </aside>
  );
}
export default Sidebar;
