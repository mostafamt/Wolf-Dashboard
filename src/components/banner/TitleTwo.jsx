import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BannerContext } from "@pages/Banners/Banners";

function TitleTwo() {
  const { edit, setEdit } = useContext(BannerContext);
  return (
    <div className="title d-flex justify-content-between align-items-center">
      <div>
        <h2>Banner</h2>
        <div className="path">
          <span>Banner</span>
          <span>
            <BsChevronRight />
          </span>
          <span>Banner List</span>
          <span>
            <BsChevronRight />
          </span>
          <span>Banner Details</span>
        </div>
      </div>
      <div>
        <button className="cel me-3" onClick={() => setEdit(false)}>
          x cancel
        </button>
      </div>
    </div>
  );
}
export default TitleTwo;
