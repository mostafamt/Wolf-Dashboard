import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function TitleOne() {
  const navigate = useNavigate();

  const onClickAddSubCategory = () => {
    navigate("/sub-categories/add");
  };

  return (
    <div className="title d-flex justify-content-between align-items-center">
      <div>
        <h2>Sub Categories</h2>
        <div className="path">
          <span>Product</span>
          <span>
            <BsChevronRight />
          </span>
          <span>Sub Categories</span>
        </div>
      </div>
      <button onClick={onClickAddSubCategory}>+ Add Sub Category</button>
    </div>
  );
}
export default TitleOne;
