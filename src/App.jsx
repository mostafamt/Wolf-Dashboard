import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/dashboard.css";

import Home from "@pages/Home/Home";
import Products from "@pages/Products/Products";
import Orders from "@pages/Orders/Orders";
import Customers from "@pages/Customers/Customers";
import Suppliers from "@pages/Suppliers/Suppliers";
import Ads from "@pages/Ads/Ads";
import Statistics from "@pages/Statistics/Statistics";
import Settings from "@pages/settings/Settings";
import Support from "@pages/support/Support";
import Login from "@pages/Login/Login";
import MainLayout from "@components/Layout/MainLayout/MainLayout";
import SignUp from "@pages/SignUp/SignUp";
import AuthLayout from "@components/Layout/AuthLayout/AuthLayout";
import Test from "@pages/Test/Test";
import Categories from "@pages/Categories/Categories";
import Category from "@pages/Category/Category";
import "react-toastify/dist/ReactToastify.css";
import AddSubCategory from "@components/subcategory/AddSubCategory/AddSubCategory";
import EditSubCategory from "@components/subcategory/EditSubCategory/EditSubCategory";
import AddProduct from "@pages/AddProduct/AddProduct";
import SubCategoriesOfCategory from "./pages/SubCategoriesOfCategory/SubCategoriesOfCategory";
import SubCategories from "@pages/SubCategories/SubCategories";

function App() {
  return (
    <BrowserRouter>
      {/* <Modal /> */}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:category/sub-categories"
            element={<SubCategoriesOfCategory />}
          />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/sub-categories" element={<SubCategories />} />
          <Route path="/sub-categories/add" element={<AddSubCategory />} />
          <Route
            path="/sub-categories/edit/:id"
            element={<EditSubCategory />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
