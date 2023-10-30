import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductListTable from "./components/productlist/ProducListTable";
import "./components/dashboard.css";
import MainCategory from "./components/MianCategory";
import SubCategory from "./components/SubCategory";
import Orders from "./components/Orders";
import Customer from "./components/Customer";
import Supplier from "./components/Supplier";
import Banner from "./components/Banner";
import Settings from "./pages/settings/Settings";
import Support from "./pages/support/Support";
import Statistics from "./pages/Statistics/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductListTable />} />
          <Route path="/categories" element={<MainCategory />} />
          <Route path="/subCategories" element={<SubCategory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/ads" element={<Banner />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
