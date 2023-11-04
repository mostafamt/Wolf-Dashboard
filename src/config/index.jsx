import HomeIcon from "@icons/HomeIcon";
import ProductIcon from "@icons/ProductIcon";
import OrdersIcon from "@icons/OrdersIcon";
import CustomersIcon from "@icons/CustomersIcon";
import SupplierIcon from "@icons/SupplierIcon";
import AdsIcon from "@icons/AdsIcon";
import SettingsIcon from "@icons/SettingsIcon";
import SupportIcon from "@icons/SupportIcon";
import { useAuth } from "@hooks/use-auth";

import styles from "./style.module.scss";

const BACKEND = "LOCAL";

const urls = {
  LOCAL: "http://localhost:8088",
  SERVER: "",
};

const BACKEND_URL = urls[BACKEND];

export const useConfig = () => {
  const { onLogout } = useAuth();

  const SIDEBAR_ITEMS = [
    {
      icon: <HomeIcon />,
      label: "home",
      to: "/",
    },
    {
      icon: <ProductIcon />,
      label: "product",
      to: "/products",
      list: [
        { label: "Product List", to: "/products" },
        { label: "Categories", to: "/categories" },
        { label: "Sub Categories", to: "/sub-categories" },
      ],
    },
    {
      icon: <OrdersIcon />,
      label: "orders",
      to: "/orders",
      notifications: 2,
    },
    {
      icon: <CustomersIcon />,
      label: "customers",
      to: "/customers",
    },
    {
      icon: <SupplierIcon />,
      label: "supplier",
      to: "/suppliers",
    },
    {
      icon: <AdsIcon />,
      label: "ad & banner",
      to: "/ads",
      className: styles.ads,
    },
    {
      icon: <SettingsIcon />,
      label: "settings",
      to: "/settings",
    },
    {
      icon: <SupportIcon />,
      label: "logout",
      onClick: onLogout,
    },
  ];

  return [SIDEBAR_ITEMS];
};

export { BACKEND_URL };
