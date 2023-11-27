import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import TitleOne from "@components/maincategory/TitileOne";
import MainTable from "@components/maincategory/MainTable";
import axios from "../../axios";

const Categories = () => {
  const [searchCategory, setSearchCategory] = useState();
  const [categories, setCategories] = React.useState([]);

  const getData = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
  };

  const fetchCategoriesByName = async (name) => {
    const res = await axios.get(`/main_category/search?name=${name}`);
    setCategories(res.data.response);
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (searchCategory) {
      fetchCategoriesByName(searchCategory);
    } else {
      getData();
    }
  }, [searchCategory]);

  return (
    <div className="main-category">
      <TitleOne />
      <div className="search">
        <BsSearch />
        <input
          type="text"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          placeholder="Search by category name..."
          className="flex-grow-1"
        />
      </div>
      <MainTable categories={categories} />
    </div>
  );
};

export default Categories;
