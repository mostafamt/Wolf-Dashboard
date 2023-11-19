import { BsChevronRight } from "react-icons/bs";
import Button from "../Button/Button";
import PlusIcon from "@icons/PlusIcon";
import { useNavigate } from "react-router-dom";

function TitleOne() {
  const navigate = useNavigate();

  const onClickAddBanner = () => {
    navigate("/banners/add");
  };

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
        </div>
      </div>
      <div>
        <Button onClick={onClickAddBanner}>
          <PlusIcon />
          <span>add Banner</span>
        </Button>
      </div>
    </div>
  );
}
export default TitleOne;
