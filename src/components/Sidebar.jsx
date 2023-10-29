import Logo from "../assets/logoo 1 1.svg";
import { BiHomeAlt, BiPackage, BiStore } from "react-icons/bi";
import { BsCart2, BsGear, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { useContext, useState } from "react";
import { ShowPageContext } from "./Dashboard";
import { RiAdvertisementLine } from "react-icons/ri";

function Sidebar() {
  const { page, setpage } = useContext(ShowPageContext);
  const [active, setActive] = useState("home");
  const [showProducts, setShowProducts] = useState(false);

  const handleProduct = () => {
    setShowProducts(!showProducts);
    setActive("product");
  };
  const handleActivePage = (value) => {
    setActive(value);
    setpage(value);
  };
  return (
    <aside className="d-flex flex-column justify-content-between position-sticky top-0">
      <div className="">
        <img src={Logo} className="logo" />
        <div
          className={`${active == "home" && "active"}`}
          onClick={() => handleActivePage("home")}
        >
          <span>
            <BiHomeAlt />{" "}
          </span>
          <p>Home</p>
        </div>
        <div className="product-side">
          <div
            className={`d-flex justify-content-between flex-grow-1 align-items-center ${
              active == "product"
                ? "active"
                : showProducts && active != "product"
                ? "sub-active"
                : ""
            }`}
            onClick={() => handleProduct()}
          >
            <div className="">
              <span>
                <BiPackage />{" "}
              </span>
              <p>Product</p>
            </div>
            {showProducts ? (
              <span>
                <BsChevronUp />
              </span>
            ) : (
              <span>
                <BsChevronDown />{" "}
              </span>
            )}
          </div>
          {showProducts && (
            <ul>
              <li
                className={`${active == "prolist" && "active"}`}
                onClick={() => handleActivePage("prolist")}
              >
                Product List
              </li>
              <li
                className={`${active == "cate" && "active"}`}
                onClick={() => handleActivePage("cate")}
              >
                Categories
              </li>
              <li
                className={`${active == "sub" && "active"}`}
                onClick={() => handleActivePage("sub")}
              >
                Sub Categories
              </li>
            </ul>
          )}
        </div>
        <div
          className={`side-orders ${active == "orders" && "active"}`}
          onClick={() => handleActivePage("orders")}
        >
          <div>
            <span>
              <BsCart2 />{" "}
            </span>
            <p>Orders</p>
          </div>
          <span>0</span>
        </div>
        <div
          className={`${active == "customer" && "active"}`}
          onClick={() => handleActivePage("customer")}
        >
          <span>
            <FiUsers />{" "}
          </span>
          <p>Customers</p>
        </div>
        <div
          className={`${active == "supplier" && "active"}`}
          onClick={() => handleActivePage("supplier")}
        >
          <span>
            <BiStore />{" "}
          </span>
          <p>Supplier</p>
        </div>
        <div
          className={`${active == "ad" && "active"}`}
          onClick={() => handleActivePage("ad")}
        >
          <span>
            <RiAdvertisementLine />{" "}
          </span>
          <p>AD & Banner</p>
        </div>
      </div>
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
    </aside>
  );
}
export default Sidebar;
