import React from "react";
import { BsSearch } from "react-icons/bs";
import TitleOne from "@components/subcategory/TitleOne";
import SubCategoryTable from "@components/subcategory/SubCategoryTable";

const SubCategories = () => {
  const [searchSubCategory, setSearchSubCategory] = React.useState();

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
      <SubCategoryTable />
    </div>
  );
};

export default SubCategories;
