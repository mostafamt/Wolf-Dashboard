import { useContext, useState } from "react";
import {
  BsCalendar,
  BsChevronDown,
  BsSliders,
  BsEye,
  BsPencil,
  BsTrash,
  BsChevronRight,
  BsChevronLeft,
  BsCheckLg,
} from "react-icons/bs";
import ImageProduct from "../../assets/Img.png";
import _ from "lodash";

function ProductListTable() {
  const [active, setActive] = useState("All Time");
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
  const handleShow = (value) => {};

  return (
    <div className="product-list m-0 p-0">
      <div className="table m-0 p-0">
        <table className="m-0">
          <thead>
            <tr className="">
              <td>Product </td>
              <td>SKU</td>
              <td>Category</td>
              <td>
                <div
                  className="d-flex justify-content-between align-items-center flex-grow-1"
                  onClick={() => setheadDrop("price")}
                >
                  <span>Price</span>
                  <BsChevronDown />
                  {headDrop == "price" && (
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
                  onClick={() => setheadDrop("status")}
                >
                  <span>Status</span>
                  <BsChevronDown />
                  {headDrop == "status" && (
                    <ul>
                      <li>k</li>
                      <li>dd/</li>
                      <li>dd</li>
                    </ul>
                  )}
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {listProduct.map((item, index) => {
              if (index >= startItem && index < endItem) {
                return (
                  <tr key={item.Id}>
                    <td>
                      <div className="d-flex product-desc justify-content-center">
                        <img src={item.Image} />
                        <div>
                          <p>{item.Name}</p>
                          <span>{item.ColorNum}</span>
                        </div>
                      </div>
                    </td>
                    <td
                      className="sku"
                      style={{ color: "#5C59E8", textAlign: "center" }}
                    >
                      #{item.Sku}
                    </td>
                    <td className="category" style={{ textAlign: "center" }}>
                      رجال{" "}
                    </td>
                    <td className="added" style={{ textAlign: "center" }}>
                      659459
                    </td>
                    <td className="status">
                      <p
                        className={`${
                          item.Status == "Shiped"
                            ? "ship"
                            : item.Status == "Processing"
                            ? "process"
                            : ""
                        }`}
                      >
                        {item.Status}
                      </p>
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
    </div>
  );
}
export default ProductListTable;

export const listProduct = [
  {
    Id: 1,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Processing",
    Added: "29 Dec 2022",
  },
  {
    Id: 2,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 3,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Shiped",
    Added: "29 Dec 2022",
  },
  {
    Id: 4,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Out of Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 5,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 6,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 7,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 8,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 9,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 10,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 11,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 12,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 13,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 14,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 15,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 16,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 17,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 18,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 19,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 20,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 21,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 22,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 23,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 24,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 25,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 26,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 27,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 28,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 29,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 30,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 31,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 32,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 33,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 34,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 35,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 36,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 37,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 38,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 39,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
  {
    Id: 40,
    Image: ImageProduct,
    Name: "تيشيرت بولو مطبع",
    ColorNum: "3 Colors",
    Sku: "302012",
    Category: "رجال(ملابس) ",
    Stock: "10",
    Price: "$121.00",
    Status: "Low Stock",
    Added: "29 Dec 2022",
  },
];
