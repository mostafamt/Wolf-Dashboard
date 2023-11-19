import CircleDeleteIcon from "@icons/CircleDeleteIcon";
import DeleteIcon from "@icons/DeleteIcon";
import CloseIcon from "@icons/CloseIcon";
import Button from "@components/Button/Button";
import styles from "./deleteBannerModalContent.module.scss";

const DeleteBannerModalContent = (props) => {
  const { handleClose, onDelete } = props;
  return (
    <div className={styles["modal-content"]}>
      <CircleDeleteIcon />
      <h4>Delete Banner</h4>
      <p>Are you sure to delete this banner?</p>

      <div>
        <Button variant="secondary" onClick={handleClose}>
          <CloseIcon />
          <span>cancel</span>
        </Button>
        <Button variant="primary" className={styles.primary} onClick={onDelete}>
          <DeleteIcon />
          <span>delete banner</span>
        </Button>
      </div>
    </div>
  );
};

export default DeleteBannerModalContent;
