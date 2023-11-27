import React from "react";
import { BsSearch } from "react-icons/bs";
import TitleOne from "@components/subcategory/TitleOne";
import SubCategoryTable from "@components/subcategory/SubCategoryTable";
import axios from "../../axios";

const SubCategories = () => {
  const [searchSubCategory, setSearchSubCategory] = React.useState();
  const [subCategories, setSubCategories] = React.useState([]);

  const fetchSubCategoriesByName = async (name) => {
    const res = await axios.get(`/subcategory/search?name=${name}`);
    setSubCategories(res.data);
  };

  const fetchSubCategories = async () => {
    const res = await axios.get("/subcategory/main_subcategory");
    setSubCategories(res.data);
  };

  React.useEffect(() => {
    fetchSubCategories();
  }, []);

  React.useEffect(() => {
    if (searchSubCategory) {
      fetchSubCategoriesByName(searchSubCategory);
    } else {
      fetchSubCategories();
    }
  }, [searchSubCategory]);

  return (
    <div className="sub-category">
      <TitleOne />
      <div className="search">
        <BsSearch />
        <input
          type="text"
          value={searchSubCategory}
          onChange={(e) => setSearchSubCategory(e.target.value)}
          placeholder="Search by sub category name..."
          className="flex-grow-1"
        />
      </div>
      <SubCategoryTable
        subCategories={subCategories}
        fetchSubCategories={fetchSubCategories}
      />
    </div>
  );
};

export default SubCategories;
