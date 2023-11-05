import { useLocation, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "../../axios";
import { ToastContainer, toast } from "react-toastify";

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state;

  const onClickCancel = () => {
    navigate("/categories");
  };

  const onSubmit = async (values) => {
    await axios.put(`/main_category/update/${category._id}`, values);
    toast.success("Saved Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: category.name,
      description: category.description,
    },
  });

  return (
    <>
      <ToastContainer />
      <form className="main-category" onSubmit={handleSubmit(onSubmit)}>
        <div className="title d-flex justify-content-between align-items-center">
          <div>
            <h2>Category Details</h2>
            <div className="path">
              <span>Product</span>
              <span>
                <BsChevronRight />
              </span>
              <span>Categories</span>
              <span>
                <BsChevronRight />
              </span>
              <span>{category.name}</span>
              <span>
                <BsChevronRight />
              </span>
              <span>Category Details</span>
            </div>
          </div>
          <div>
            <button className="cel me-3" onClick={onClickCancel}>
              x cancel
            </button>
            <button type="submit">
              <BiSave /> Save Category
            </button>
          </div>
        </div>

        <div className="edit-category">
          <h2>General Information</h2>
          <div>
            <p>Category Name</p>
            <input name="name" {...register("name")} />
          </div>
          <div>
            <p>Description</p>
            <textarea
              name="description"
              {...register("description")}
              rows={6}
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default Category;
