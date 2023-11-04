import React from "react";
import EditPage from "@components/maincategory/EditPage";
import { useLocation } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { MainCategoryContext } from "@pages/Categories/Categories";
import { useContext, useState } from "react";
import { BiSave } from "react-icons/bi";

const Category = () => {
  const location = useLocation();
  const { category } = location.state;

  return (
    <div className="main-category">
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h2>Product</h2>
          <div className="path">
            <span>Product</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Categories</span>
            <span>
              <BsChevronRight />
            </span>
            <span>{category.Category}</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Category Details</span>
          </div>
        </div>
        <div>
          <button className="cel me-3">x cancel</button>
          <button>
            <BiSave /> Save Category
          </button>
        </div>
      </div>

      <div className="edit-category">
        <h2>General Information</h2>
        <div>
          <p>Category Name</p>
          <input
            name="category"
            // value={category}
            //   placeholder={item.Category}
            //   onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            name="description"
            rows={6}
            //   value={describtion}
            //   placeholder={item.Describtion}
            //   onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Category;
