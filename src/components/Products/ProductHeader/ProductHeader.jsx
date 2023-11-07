import Breadcrumbs from "../../Breadecrumbs/Breadecrumbs";
import Button from "@components/Button/Button";
import CloseIcon from "@icons/CloseIcon";
import PlusIcon from "@icons/PlusIcon";

import styles from "./productHeader.module.scss";

const ProductHeader = () => {
  return (
    <div className={styles["product-header"]}>
      <div>
        <h2>Add Product</h2>
        <Breadcrumbs list={["product", "product list", "add product"]} />
      </div>
      <div>
        <Button type="secondary">
          <CloseIcon />
          <span>cancel</span>
        </Button>
        <Button type="primary">
          <PlusIcon />
          <span>add product</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;
