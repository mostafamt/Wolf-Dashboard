import { BsGear } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const SidebarBottom = (props) => {
  const { active, handleActivePage } = props;
  return (
    <div className="">
      <div
        className={`${active == "settings" && "active"}`}
        onClick={() => handleActivePage("settings")}
      >
        <span>
          <BsGear />{" "}
        </span>
        <p>Settings</p>
      </div>
      <div
        className={`${active == "support" && "active"}`}
        onClick={() => handleActivePage("support")}
      >
        <span>
          <CiLogout />{" "}
        </span>
        <p>Support</p>
      </div>
    </div>
  );
};

export default SidebarBottom;
