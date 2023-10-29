import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function AddProduct(){
  
  return(
    <div className="add-product d-flex justify-content-between">
      <LeftBox/>
      <RightBox/>
    </div>
  )
}
export default AddProduct;