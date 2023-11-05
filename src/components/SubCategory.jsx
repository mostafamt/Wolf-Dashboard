import React from "react";
import TitleOne from "./subcategory/TitleOne";
import { BsSearch } from "react-icons/bs";
import SubCategoryTable from "./subcategory/SubCategoryTable";

function SubCategory() {
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
}
export default SubCategory;
