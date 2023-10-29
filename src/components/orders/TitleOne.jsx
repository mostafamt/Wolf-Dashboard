import { BsChevronRight } from "react-icons/bs";

function TitleOne(){
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Order</h2>
      <div className='path'>
        <span>Order</span>
        <span><BsChevronRight /></span>
        <span>Order List</span>
      </div>
    </div>
  </div>
  )
}
export default TitleOne;