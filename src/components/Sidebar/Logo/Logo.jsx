import { Link } from "react-router-dom";
import LogoIcon from "../../../icons/LogoIcon";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
