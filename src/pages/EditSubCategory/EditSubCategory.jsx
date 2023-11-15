import axios from "../../axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BsChevronRight } from "react-icons/bs";
import SaveIcon from "@icons/SaveIcon";
import CloseIcon from "@icons/CloseIcon";
import ImgIcon from "../../assets/image.png";

import styles from "./editSubCategory.module.scss";

const EditSubCategory = () => {
  const [img, setImage] = React.useState();
  const [subCategory, setSubCategory] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const fetchCategories = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
  };

  const fetchSubCategory = async () => {
    const id = params.id;
    const res = await axios.get(`subcategory/${id}`);
    setSubCategory(res.data);
    setImage(res.data.Image);
    return res.data;
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
    navigate("/sub-categories");
  };

  const onSubmit = async (values) => {
    const data = {
      ...values,
      Image: img,
    };
    try {
      await axios.put(`/subcategory/${subCategory._id}`, data);
      toast.success("Saved Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/sub-categories");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const { handleSubmit, register } = useForm({
    defaultValues: async () => {
      const subCategory = await fetchSubCategory();
      return {
        name: subCategory.name,
        description: subCategory.description,
        category: subCategory.category,
      };
    },
  });

  return (
    <>
      <ToastContainer />
      <form
        className={`add-sub-category ${styles["add-sub-category"]}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="title d-flex justify-content-between align-items-center">
          <div>
            <h2>Edit Sub Categories</h2>
            <div className="path">
              <span>Product</span>
              <span>
                <BsChevronRight />
              </span>
              <span>Sub Category</span>
              <span>
                <BsChevronRight />
              </span>
              <span>Edit Sub Categories</span>
            </div>
          </div>
          <div>
            <button className="cel me-3" onClick={onClickCancel}>
              <CloseIcon /> cancel
            </button>
            <button type="submit">
              <SaveIcon /> Save Sub Category
            </button>
          </div>
        </div>
        <div className="add-sub d-flex ">
          <div className="media">
            <h2>Media </h2>
            <p>Photo</p>
            <div className="d-flex flex-column align-items-center">
              {img ? (
                <div className={styles["img-box"]}>
                  <img src={img.secure_url} alt="cover image for subcategory" />
                </div>
              ) : (
                <>
                  <div className="img">
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
          <div className="add-cat flex-grow-1">
            <h2>General Information</h2>
            <div>
              <p>SubCategory Name</p>
              <input name="name" {...register("name")} />
            </div>
            <div>
              <p>Category</p>
              <select
                // value={location.state.subCategory?.category?._id}
                name="category"
                {...register("category")}
              >
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Description</p>
              <textarea
                name="description"
                rows={6}
                {...register("description")}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditSubCategory;
