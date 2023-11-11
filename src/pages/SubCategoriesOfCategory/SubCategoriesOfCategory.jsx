import React from "react";
import TitleOne from "@components/subcategory/TitleOne";
import { BsSearch } from "react-icons/bs";
import SubCategoriesOfCategoryTable from "@components/Tables/SubCategoriesOfCategoryTable/SubCategoriesOfCategoryTable";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const SubCategoriesOfCategory = () => {
  const [searchSubCategory, setSearchSubCategory] = React.useState();
  const [subCategories, setSubCategories] = React.useState([]);
  const params = useParams();

  console.log("params= ", params);

  const getSubCategories = async (categoryId) => {
    const res = await axios.get(`subcategory/main_category/${categoryId}`);
    setSubCategories(res.data.response);
  };

  React.useEffect(() => {
    const categoryId = params.category;
    getSubCategories(categoryId);
  }, [params.category]);

  return (
    <div className="sub-category">
      <TitleOne />
      <div className="search">
        <BsSearch />
        <input
          type="text"
          value={searchSubCategory}
          onChange={(e) => setSearchSubCategory(e.target.value)}
          placeholder="Search by product name. . ."
          className="flex-grow-1"
        />
      </div>
      <SubCategoriesOfCategoryTable list={subCategories} />
    </div>
  );
};

export default SubCategoriesOfCategory;
