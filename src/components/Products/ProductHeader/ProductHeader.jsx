import Breadcrumbs from "../../Breadecrumbs/Breadecrumbs";
import Button from "@components/Button/Button";
import CloseIcon from "@icons/CloseIcon";
import PlusIcon from "@icons/PlusIcon";

import styles from "./productHeader.module.scss";
import { useNavigate } from "react-router-dom";

const ProductHeader = (props) => {
  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate("/products");
  };

  const { header, buttonLabel } = props;

  return (
    <div className={styles["product-header"]}>
      <div>
        <h2>{header}</h2>
        <Breadcrumbs list={["product", "product list", header]} />
      </div>
      <div>
        <Button variant="secondary" type="button" onClick={onClickCancel}>
          <CloseIcon />
          <span>cancel</span>
        </Button>
        <Button variant="primary">
          {buttonLabel === "add product" && <PlusIcon />}
          <span>{buttonLabel}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;
