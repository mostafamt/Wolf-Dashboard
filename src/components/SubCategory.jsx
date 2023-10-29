import { createContext, useState } from "react";
import TitleOne from "./subcategory/TitleOne";
import { BsSearch } from "react-icons/bs";
import SubCategoryTable from "./subcategory/SubCategoryTable";
import AddSubCategory from "./subcategory/AddSubCategory";

export const AddSubCategoryContext = createContext();
function SubCategory() {
  const [addPage, setAddPage] = useState(false);
  const [searchSubCategory, setSearchSubCategory] = useState();
  return (
    <div className="sub-category">
      <AddSubCategoryContext.Provider value={{ addPage, setAddPage }}>
        {
          addPage ?
            <AddSubCategory />
            :
            <>
              <TitleOne />
              <div className="search">
                <BsSearch />
                <input type="text"
                  value={searchSubCategory}
                  onChange={(e) => setSearchSubCategory(e.target.value)}
                  placeholder='Search by product name. . .'
                  className="flex-grow-1" />
              </div>
              <SubCategoryTable />
            </>
        }
      </AddSubCategoryContext.Provider>
    </div>
  )
}
export default SubCategory;