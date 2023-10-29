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
import { OrdersContext } from "../Orders";

function ProductListTable() {
  const { detailsPage, setDetailsPage, orderId, setOrderId } =
    useContext(OrdersContext);
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
  const handleShow = (value) => {
    setOrderId(value);
    setDetailsPage(true);
  };

  return (
    <div className="product-list">
      <div className="inps d-flex justify-content-between">
        <div className="select-time d-flex ">
          <ul>
            <li
              className={`${active == "All Time" && "active"}`}
              onClick={() => setActive("ALL Time")}
            >
              All Time
            </li>
            <li
              className={`${active == "12 Months" && "active"}`}
              onClick={() => setActive("12 Months")}
            >
              12 Months
            </li>
            <li
              className={`${active == "30 Days" && "active"}`}
              onClick={() => setActive("30 Days")}
            >
              30 Days
            </li>
            <li
              className={`${active == "7 Days" && "active"}`}
              onClick={() => setActive("7 Days")}
            >
              7 Days
            </li>
            <li
              className={`${active == "24 Hours" && "active"}`}
              onClick={() => setActive("24 Hours")}
            >
              24 Hours
            </li>
          </ul>
        </div>
        <div className="d-flex ">
          <div className="calender">
            <BsCalendar />
            <span>Select Dates</span>
          </div>
          <div className="filter me-5">
            <BsSliders />
            <span>Added from to</span>
          </div>
        </div>
      </div>
      <div className="table">
        <table className="">
          <thead>
            <tr className="">
              <td></td>
              <td>Order Id</td>
              <td>
                <div
                  className="d-flex justify-content-between align-items-center flex-grow-1"
                  onClick={() => setheadDrop("product")}
                >
                  <span>Product</span>
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
                  onClick={() => setheadDrop("date")}
                >
                  <span>Date</span>
                  <BsChevronDown />
                  {headDrop == "date" && (
                    <ul>
                      <li>k</li>
                      <li>dd/</li>
                      <li>dd</li>
                    </ul>
                  )}
                </div>
              </td>
              <td>Customer </td>
              <td>
                <div
                  className="d-flex justify-content-between align-items-center flex-grow-1"
                  onClick={() => setheadDrop("total")}
                >
                  <span>Total</span>
                  <BsChevronDown />
                  {headDrop == "total" && (
                    <ul>
                      <li>k</li>
                      <li>dd/</li>
                      <li>dd</li>
                    </ul>
                  )}
                </div>
              </td>
              <td>Payment</td>
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
                    <td className="sku" style={{ color: "#5C59E8" }}>
                      #{item.Sku}
                    </td>
                    <td>
                      <div className="d-flex product-desc">
                        <img src={item.Image} />
                        <div>
                          <p>{item.Name}</p>
                          <span>{item.ColorNum}</span>
                        </div>
                      </div>
                    </td>
                    <td className="category" style={{ textAlign: "left" }}>
                      1 min ago{" "}
                    </td>
                    <td className="stock">
                      <div className="d-flex justify-content-center product-desc ">
                        <div>
                          <p>{item.Name}</p>
                          <span>{item.ColorNum}</span>
                        </div>
                      </div>
                    </td>
                    <td className="price">{item.Price}</td>
                    <td className="added" style={{ textAlign: "center" }}>
                      {item.Added}
                    </td>
                    <td className="status">
                      <p
                        className={`${
                          item.Status == "Low Stock"
                            ? "low"
                            : item.Status == "Published"
                            ? "pub"
                            : item.Status == "Draft"
                            ? "draft"
                            : "out"
                        }`}
                      >
                        {item.Status}
                      </p>
                    </td>
                    <td className="actions">
                      <button onClick={() => handleShow(item.Id)}>
                        <BsEye />
                      </button>
                      <button>
                        <BsPencil />
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
    Status: "Draft",
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
    Status: "Published",
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
