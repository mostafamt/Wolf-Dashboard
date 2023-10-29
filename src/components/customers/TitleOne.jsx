import { BsChevronRight } from "react-icons/bs";

function TitleOne(){
  return(
    <div className='title d-flex justify-content-between align-items-center'>
    <div>
      <h2>Customer</h2>
      <div className='path'>
        <span>Customer</span>
        <span><BsChevronRight /></span>
        <span>Customer List</span>
      </div>
    </div>
  </div>
  )
}
export default TitleOne;