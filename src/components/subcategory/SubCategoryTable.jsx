import React from "react";
import { useState } from "react";
import {
  BsChevronDown,
  BsEye,
  BsPencil,
  BsTrash,
  BsChevronRight,
  BsChevronLeft,
  BsCheckLg,
} from "react-icons/bs";
import ImageProduct from "../../assets/Img.png";
import _ from "lodash";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

function SubCategoryTable() {
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const [check, setCheck] = useState(false);
  const [subCategories, setSubCategories] = React.useState([]);
  const navigate = useNavigate();

  const fetchSubCategories = async () => {
    const res = await axios.get("/subcategory/main_subcategory");
    setSubCategories(res.data);
  };

  React.useEffect(() => {
    fetchSubCategories();
  }, []);

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const handleCheckOut = (value, id) => {
    setCheck(true);
    value.classList.toggle("check-active");
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(subCategories.length / 8));

  const onEditSubCategory = (subCategory) => {
    navigate(`/sub-categories/edit/${subCategory._id}`, {
      state: { subCategory },
    });
  };

  return (
    <div className="table">
      <table className="">
        <thead>
          <tr className="">
            <td>
              <div
                className={`check ${check && "check-all"}`}
                onClick={() => setCheck(false)}
              >
                <span>-</span>
              </div>
            </td>
            <td>
              <div
                className="d-flex justify-content-between align-items-center flex-grow-1"
                onClick={() => setheadDrop("product")}
              >
                <span>Sub Category</span>
                <BsChevronDown />
                {headDrop == "product" && (
                  <ul>
                    <li>k</li>
                    <li>dd/</li>
                    <li>dd</li>
                  </ul>
                )}
              </div>
            </td>
            <td>
              <div
                className="d-flex justify-content-between align-items-center flex-grow-1"
                onClick={() => setheadDrop("stock")}
              >
                <span>suppliers</span>
                <BsChevronDown />
                {headDrop == "stock" && (
                  <ul>
                    <li>k</li>
                    <li>dd/</li>
                    <li>dd</li>
                  </ul>
                )}
              </div>
            </td>
            <td>
              <div
                className="d-flex justify-content-between align-items-center flex-grow-1"
                onClick={() => setheadDrop("stock")}
              >
                <span>Stock</span>
                <BsChevronDown />
                {headDrop == "stock" && (
                  <ul>
                    <li>k</li>
                    <li>dd/</li>
                    <li>dd</li>
                  </ul>
                )}
              </div>
            </td>
            <td>
              <div
                className="d-flex justify-content-between align-items-center flex-grow-1"
                onClick={() => setheadDrop("added")}
              >
                <span>Added</span>
                <BsChevronDown />
                {headDrop == "added" && (
                  <ul>
                    <li>k</li>
                    <li>dd/</li>
                    <li>dd</li>
                  </ul>
                )}
              </div>
            </td>
            <td onClick={() => setheadDrop("")}>Action</td>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((subCategory, index) => {
            if (index >= startItem && index < endItem) {
              return (
                <tr key={subCategory._id}>
                  <td>
                    <div
                      className="check"
                      onClick={(e) => handleCheckOut(e.target, subCategory._id)}
                    >
                      <span>
                        <BsCheckLg />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex sub-category-desc">
                      <img
                        src={subCategory.Image}
                        alt={subCategory.Image}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <p>{subCategory.name}</p>
                        <span>{subCategory.description}</span>
                      </div>
                    </div>
                  </td>
                  <td className="suplliers">
                    {Math.ceil(Math.random() * 1000)}
                  </td>
                  <td className="Stock">{Math.ceil(Math.random() * 1000)}</td>
                  <td className="added">
                    {new Date(subCategory.updatedAt).toDateString()}
                  </td>
                  <td className="actions">
                    <button>
                      <BsEye />
                    </button>
                    <button onClick={() => onEditSubCategory(subCategory)}>
                      <BsPencil />
                    </button>
                    <button>
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="tfooter">
        <div className="showing">
          {endItem < subCategories.length ? (
            <span>
              {" "}
              Showing {startItem + 1}-{endItem} from {subCategories.length}{" "}
            </span>
          ) : (
            <span>
              {" "}
              Showing {startItem + 1}-{subCategories.length} from{" "}
              {subCategories.length}{" "}
            </span>
          )}
        </div>
        <ul>
          <li
            onClick={() => {
              if (startItem >= 8) {
                setStartItem(startItem - 8);
                setEndItem(endItem - 8);
              }
            }}
          >
            <BsChevronLeft />
          </li>
          {paginations.map((value) => {
            if (subCategories.length / 8 > value) {
              return (
                <li
                  className={`${startItem == value * num && "active"}`}
                  onClick={() => editCulc(value + 1)}
                >
                  {value + 1}
                </li>
              );
            }
          })}
          <li
            onClick={() => {
              if (startItem <= 8 * (Math.ceil(subCategories.length / 8) - 2)) {
                setStartItem(startItem + 8);
                setEndItem(endItem + 8);
              }
            }}
          >
            <BsChevronRight />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SubCategoryTable;
