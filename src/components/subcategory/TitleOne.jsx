import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { AddSubCategoryContext } from "../SubCategory";

function TitleOne(){
  const {addPage, setAddPage } =useContext(AddSubCategoryContext);
  return( 
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Sub Categories</h2>
      <div className='path'>
        <span>Product</span>
        <span><BsChevronRight /></span>
        <span>Sub Categories</span>
      </div>
    </div>
    <button onClick={()=>setAddPage(true)}>+ Add Sub Category</button>
  </div>
  )
}
export default TitleOne;