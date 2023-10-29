import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { CustomerContext } from "../Customer";

function TitleTwo(){
  const {detailsPage, setDetailsPage} = useContext(CustomerContext);
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Customer</h2>
      <div className='path'>
        <span>Customer</span>
        <span><BsChevronRight /></span>
        <span>Customer List</span>
        <span><BsChevronRight /></span>
        <span>Customer Details</span>
      </div>
    </div>
    <div >
    <button className="cel me-3" onClick={()=>setDetailsPage(false)}>x cancel</button>
    </div>
  </div>
  )
}
export default TitleTwo;