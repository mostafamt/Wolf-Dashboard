import React from "react";
import Modal from "../Modal/Modal";
import { BsEye, BsEyeSlash, BsPencil, BsTrash } from "react-icons/bs";

import styles from "./banner.module.scss";
import DeleteBannerModalContent from "../Modal/ModalContent/DeleteBannerModalContent/DeleteBannerModalContent";
import axios from "../../axios";
import { toast } from "react-toastify";

const Banner = (props) => {
  const { banner, deleteBanner, editBanner, fetchBanner } = props;
  const [showModal, setShowModal] = React.useState(false);

  const onClickDelete = () => {
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  const onDeleteBanner = () => {
    onCloseModal();
    deleteBanner(banner._id);
  };

  const onToggleViewBanner = async () => {
    await axios.put(`/banner/${banner._id}`, { view: !banner.view });
    toast.success("Banner updated successfully");
    fetchBanner();
  };

  return (
    <>
      <Modal show={showModal} handleClose={onCloseModal}>
        <DeleteBannerModalContent
          handleClose={onCloseModal}
          onDelete={onDeleteBanner}
        />
      </Modal>

      <div className={`ad ${styles.banner} `}>
        <div className={styles["img-box"]}>
          <img src={banner.img.secure_url} alt={banner.img.public_id} />
        </div>
        <div className={styles.footer}>
          <div className="d-flex">
            <div className={styles.actions}>
              <button onClick={onToggleViewBanner}>
                {banner.view ? <BsEye /> : <BsEyeSlash />}
              </button>
              <button onClick={() => editBanner(banner._id)}>
                <BsPencil />
              </button>
              <button onClick={onClickDelete}>
                <BsTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
