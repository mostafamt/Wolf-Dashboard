import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { ProducListContext } from "../ProductList";

function TitleOne(){
  const {addProductPage, setAddProductPage} = useContext(ProducListContext);
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Product</h2>
      <div className='path'>
        <span>Product</span>
        <span><BsChevronRight /></span>
        <span>Product List</span>
      </div>
    </div>
    <button onClick={()=>setAddProductPage(true)}>+ Add Product</button>
  </div>
  )
}
export default TitleOne;