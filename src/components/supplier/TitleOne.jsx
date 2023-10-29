import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { SupplierContext } from "../Supplier";

function TitleOne() {
  const {addPage , setAddPage} =useContext(SupplierContext)
  return (
    <div className='title d-flex justify-content-between align-items-center'>
      <div>
        <h2>Supplier</h2>
        <div className='path'>
          <span>Supplier</span>
          <span><BsChevronRight /></span>
          <span>Supplier List</span>
        </div>
      </div>
      <button onClick={() => setAddPage(true)}>+ Add Product</button>
    </div>
  )
}
export default TitleOne;