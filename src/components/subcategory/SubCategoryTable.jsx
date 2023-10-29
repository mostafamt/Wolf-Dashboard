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

function SubCategoryTable() {
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const [check, setCheck] = useState(false);

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const handleCheckOut = (value, id) => {
    setCheck(true);
    value.classList.toggle("check-active");
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(listProduct.length / 8));

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
          {listProduct.map((item, index) => {
            if (index >= startItem && index < endItem) {
              return (
                <tr key={item.Id}>
                  <td>
                    <div
                      className="check"
                      onClick={(e) => handleCheckOut(e.target, item.Id)}
                    >
                      <span>
                        <BsCheckLg />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex sub-category-desc">
                      <img src={item.Image} />
                      <div>
                        <p>{item.SubCategory}</p>
                        <span>{item.SubCategoryDescriptin}</span>
                      </div>
                    </div>
                  </td>
                  <td className="suplliers">{item.Suppliers}</td>
                  <td className="Stock">{item.Stock} </td>
                  <td className="added">{item.Added}</td>
                  <td className="actions">
                    <button>
                      <BsEye />
                    </button>
                    <button>
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
          {endItem < listProduct.length ? (
            <span>
              {" "}
              Showing {startItem + 1}-{endItem} from {listProduct.length}{" "}
            </span>
          ) : (
            <span>
              {" "}
              Showing {startItem + 1}-{listProduct.length} from{" "}
              {listProduct.length}{" "}
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
            if (listProduct.length / 8 > value) {
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
              if (startItem <= 8 * (Math.ceil(listProduct.length / 8) - 2)) {
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
export const listProduct = [
  {
    Id: 1,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 2,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 3,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 4,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 5,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 6,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 7,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 8,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 9,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 10,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 11,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 12,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 13,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 14,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
  {
    Id: 15,
    Image: ImageProduct,
    SubCategory: "أزياء رجال",
    SubCategoryDescriptin: "Great fashion, great selections, great prices.",
    Suppliers: "1231",
    Stock: "132",
    Added: "29 Dec 2022",
  },
];
