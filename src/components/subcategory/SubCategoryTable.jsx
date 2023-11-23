import { useState } from "react";
import {
  BsChevronDown,
  BsEye,
  BsPencil,
  BsTrash,
  BsChevronRight,
  BsChevronLeft,
  BsCheckLg,
  BsEyeSlash,
} from "react-icons/bs";
import _ from "lodash";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

function SubCategoryTable(props) {
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const [check, setCheck] = useState(false);
  const { subCategories, fetchSubCategories } = props;
  const navigate = useNavigate();

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(subCategories.length / 8));

  const onEditSubCategory = (subCategory) => {
    navigate(`/sub-categories/edit/${subCategory._id}`, {
      state: { subCategory },
    });
  };

  const onClickViewSubCategory = async (subCategory) => {
    await axios.put(`subcategory/${subCategory._id}`, {
      view: !subCategory.view,
    });
    fetchSubCategories();
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
                    <div className="check">
                      <span>
                        <BsCheckLg />
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      width: "40%",
                    }}
                  >
                    <div className="d-flex sub-category-desc">
                      <img
                        src={subCategory.Image?.secure_url}
                        alt={subCategory.Image?.public_id}
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
                  <td className="suplliers">{subCategory.suppliers}</td>
                  <td className="Stock">{subCategory.stock}</td>
                  <td className="added">
                    {new Date(subCategory.createdAt).toDateString()}
                  </td>
                  <td className="actions">
                    <button onClick={() => onClickViewSubCategory(subCategory)}>
                      {subCategory?.view ? <BsEye /> : <BsEyeSlash />}
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
          {paginations.map((value, idx) => {
            if (subCategories.length / 8 > value) {
              return (
                <li
                  key={idx}
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
