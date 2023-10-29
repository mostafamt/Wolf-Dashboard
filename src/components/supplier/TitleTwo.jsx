import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { SupplierContext } from "../Supplier";

function TitleTwo(){
  const {detailsPage, setDetailsPage} = useContext(SupplierContext);
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Supplier</h2>
      <div className='path'>
        <span>Supplier</span>
        <span><BsChevronRight /></span>
        <span>Supplier List</span>
        <span><BsChevronRight /></span>
        <span>Supplier Details</span>
      </div>
    </div>
    <div >
    <button className="cel me-3" onClick={()=>setDetailsPage(false)}>x cancel</button>
    </div>
  </div>
  )
}
export default TitleTwo;