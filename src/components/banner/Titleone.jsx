import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";

function TitleOne() {
  return (
    <div className='title d-flex justify-content-between align-items-center'>
      <div>
        <h2>Banner</h2>
        <div className='path'>
          <span>Banner</span>
          <span><BsChevronRight /></span>
          <span>Banner List</span>
        </div>
      </div>
    </div>
  )
}
export default TitleOne;