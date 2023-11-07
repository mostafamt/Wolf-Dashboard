import { useAuth } from "../../hooks/use-auth";
import styles from "./header.module.scss";

const Header = () => {
  const { getName } = useAuth();
  return (
    <header className={styles.header}>
      <button>
        <img src="/assets/profile.png" alt="profile" />
        <span></span>
      </button>
      <div className={styles.info}>
        <h4>{getName()}</h4>
        <h5>Manager</h5>
      </div>
    </header>
  );
};

export default Header;
