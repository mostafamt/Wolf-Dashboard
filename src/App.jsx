import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./components/dashboard.css";
import MainCategory from "./components/MianCategory";
import SubCategory from "./components/SubCategory";

import Home from "@pages/Home/Home";
import Products from "@pages/Products/Products";
import Orders from "@pages/Orders/Orders";
import Customers from "@pages/Customers/Customers";
import Suppliers from "@pages/Suppliers/Suppliers";
import Ads from "@pages/Ads/Ads";
import Statistics from "./pages/Statistics/Statistics";
import Settings from "./pages/settings/Settings";
import Support from "./pages/support/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<MainCategory />} />
          <Route path="/sub-categories" element={<SubCategory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
