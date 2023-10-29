import { useContext, useState } from "react";
import { AddSubCategoryContext } from "../SubCategory";
import { BsCheckLg, BsChevronRight } from "react-icons/bs";
import ImgIcon from "../../assets/image.png";
import Image from "../../assets/Img.png";

function AddSubCategory() {
  const [subCategory, setSubCategory] = useState();
  const [subDescribtion, setSubDescription] = useState();
  const { addPage, setAddPage } = useContext(AddSubCategoryContext);

  return (
    <div className="add-sub-category">
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h2>Add Sub Categories</h2>
          <div className="path">
            <span>Product</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Sub Category</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Add Sub Categories</span>
          </div>
        </div>
        <div>
          <button className="cel me-3" onClick={() => setAddPage(false)}>
            x cancel
          </button>
          <button>+ Add Sub Categories</button>
        </div>
      </div>
      <div className="add-sub d-flex ">
        <div className="media">
          <h2>Media </h2>
          <p>Photo</p>
          <div className="d-flex flex-column align-items-center">
            <div className="img">
              <img src={ImgIcon} />
            </div>
            {/* <div className="image">
              <img src={Image}/>
              <span><BsCheckLg/></span>
            </div> */}
            <p>Drag and drop image here, or click add image</p>
            <button>Add Image</button>
          </div>
        </div>
        <div className="add-cat flex-grow-1">
          <h2>General Information</h2>
          <div>
            <p>Category Name</p>
            <input
              name="category"
              value={subCategory}
              placeholder=""
              onChange={(e) => setSubCategory(e.target.value)}
            />
          </div>
          <div>
            <p>Description</p>
            <textarea
              name="description"
              rows={6}
              value={subDescribtion}
              placeholder=""
              onChange={(e) => setSubDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddSubCategory;
