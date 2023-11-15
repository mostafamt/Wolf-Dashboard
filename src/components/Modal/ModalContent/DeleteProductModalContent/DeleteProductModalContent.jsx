import styles from "./deleteProductModalContent.module.scss";
import CircleDeleteIcon from "@icons/CircleDeleteIcon";
import DeleteIcon from "@icons/DeleteIcon";
import CloseIcon from "@icons/CloseIcon";
import Button from "@components/Button/Button";

const DeleteProductModalContent = (props) => {
  const { handleClose, onDeleteProduct } = props;
  return (
    <div className={styles["modal-content"]}>
      <CircleDeleteIcon />
      <h4>Delete Product</h4>
      <p>Are you sure to delete this product?</p>

      <div>
        <Button variant="secondary" onClick={handleClose}>
          <CloseIcon />
          <span>cancel</span>
        </Button>
        <Button
          variant="primary"
          className={styles.primary}
          onClick={onDeleteProduct}
        >
          <DeleteIcon />
          <span>delete product</span>
        </Button>
      </div>
    </div>
  );
};

export default DeleteProductModalContent;
