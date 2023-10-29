import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { OrdersContext } from "../Orders";

function TitleTwo(){
  const {detailsPage, setDetailsPage} = useContext(OrdersContext);
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Order Details</h2>
      <div className='path'>
        <span>Order</span>
        <span><BsChevronRight /></span>
        <span>Order List</span>
        <span><BsChevronRight /></span>
        <span>Order Details</span>
      </div>
    </div>
    <div >
    <button className="cel me-3" onClick={()=>setDetailsPage(false)}>x cancel</button>
    </div>
  </div>
  )
}
export default TitleTwo;