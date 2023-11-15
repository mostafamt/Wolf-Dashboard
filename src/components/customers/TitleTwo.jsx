import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function TitleTwo() {
  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate("/customers");
  };

  return (
    <div className="title d-flex justify-content-between align-items-center">
      <div>
        <h2>Customer</h2>
        <div className="path">
          <span>Customer</span>
          <span>
            <BsChevronRight />
          </span>
          <span>Customer List</span>
          <span>
            <BsChevronRight />
          </span>
          <span>Customer Details</span>
        </div>
      </div>
      <div>
        <button className="cel me-3" onClick={onClickCancel}>
          x cancel
        </button>
      </div>
    </div>
  );
}
export default TitleTwo;
