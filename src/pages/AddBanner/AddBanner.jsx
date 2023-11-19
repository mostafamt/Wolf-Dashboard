import React from "react";
import { BsChevronRight } from "react-icons/bs";
import ImgIcon from "../../assets/image.png";
import SaveIcon from "@icons/SaveIcon";
import CloseIcon from "@icons/CloseIcon";
import axios from "../../axios";

import styles from "./addBanner.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "@components/Select/Select";

const AddBanner = () => {
  const [img, setImage] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const fetchCategories = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    const res = await axios.post("upload", data);
    setImage(res.data);
  };

  const onClickCancel = () => {
    navigate("/banners");
  };

  const onSubmit = async (values) => {
    if (!img) return;
    const data = {
      ...values,
      img,
    };
    console.log("data= ", data);
    await axios.post("/banner/create", data);
    toast.success("Saved Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      navigate("/banners");
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <form
        className={`add-sub-category ${styles["add-banner"]}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="title d-flex justify-content-between align-items-center">
          <div>
            <h2>Add Banner</h2>
            <div className="path">
              <span>Banners</span>
              <span>
                <BsChevronRight />
              </span>
              <span>Add Banner</span>
            </div>
          </div>
          <div>
            <button className="cel me-3" onClick={onClickCancel}>
              <CloseIcon /> cancel
            </button>
            <button type="submit">
              <SaveIcon /> Save Banner
            </button>
          </div>
        </div>
        <div className="add-sub d-flex ">
          <div className="add-cat flex-grow-1">
            <h2>General Information</h2>
            <div>
              <p>Category</p>
              <Select name="category" register={register} required={true}>
                {categories &&
                  categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
              </Select>
            </div>
            <div>
              <p>Media</p>
              <div
                className={`d-flex flex-column align-items-center ${styles.img}`}
              >
                <div className={styles.inner}>
                  {img ? (
                    <div className={styles["img-box"]}>
                      <img
                        src={img.secure_url}
                        alt="cover image for subcategory"
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <img src={ImgIcon} />
                      </div>
                      <p>Drag and drop image here, or click add image</p>
                    </>
                  )}
                  <div className={styles["input-file-box"]}>
                    <input
                      type="file"
                      name="file"
                      accept="image/*"
                      onChange={onChangeFile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBanner;
