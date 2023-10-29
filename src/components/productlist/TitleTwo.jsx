import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { ProducListContext } from "../ProductList";

function TitleTwo(){
  const {addProductPage, setAddProductPage} = useContext(ProducListContext);
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Product</h2>
      <div className='path'>
        <span>Product</span>
        <span><BsChevronRight /></span>
        <span>Product List</span>
        <span><BsChevronRight /></span>
        <span>Add Product</span>
      </div>
    </div>
    <div >
    <button className="cel me-3" onClick={()=>setAddProductPage(false)}>x cancel</button>
    <button>+ Add Product</button>
    </div>
  </div>
  )
}
export default TitleTwo;