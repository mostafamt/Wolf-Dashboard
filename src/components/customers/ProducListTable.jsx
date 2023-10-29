import { useContext, useState } from "react";
import {
  BsChevronDown,
  BsSearch,
  BsSliders,
  BsEye,
  BsChevronRight,
  BsChevronLeft,
  BsCheckLg,
} from "react-icons/bs";
import ImageProduct from "../../assets/Img.png";
import _ from "lodash";
import { CustomerContext } from "../Customer";

function ProductListTable() {
  const { detailsPage, setDetailsPage, customerId, setCustomerId } =
    useContext(CustomerContext);
  const [searchByProduct, setSearchByProduct] = useState();
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
  const handleShow = (value) => {
    setCustomerId(value);
    setDetailsPage(true);
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(listProduct.length / 8));

  return (
    <div className="product-list">
      <div className="inps d-flex justify-content-between">
        <div className="d-flex ">
          <div className="search">
            <BsSearch />
            <input
              type="text"
              value={searchByProduct}
              onChange={(e) => setSearchByProduct(e.target.value)}
              placeholder="Search Customer"
              className="flex-grow-1"
            />
          </div>
        </div>
        <div className="d-flex ">
          <div className="filter me-5">
            <BsSliders />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div className="table">
        <table className="">
          <thead>
            <tr className="">
              <td> </td>
              <td>
                <div
                  className="d-flex justify-content-between align-items-center flex-grow-1"
                  onClick={() => setheadDrop("product")}
                >
                  <span>Customer Name</span>
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
              <td>Phone</td>
              <td>Orders</td>
              <td>Total spend</td>
              <td>ADV</td>
              <td>
                <div
                  className="d-flex justify-content-between align-items-center flex-grow-1"
                  onClick={() => setheadDrop("stock")}
                >
                  <span>Last Active</span>
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
                      <div className="d-flex product-desc">
                        <img src={item.Image} style={{ borderRadius: "50%" }} />
                        <div>
                          <p>John Bushmill</p>
                          <span>Johnb@mail.com</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>01229549459</td>
                    <td style={{ textAlign: "center" }}>599</td>
                    <td style={{ textAlign: "center" }}>$599</td>
                    <td style={{ textAlign: "center" }}>$599</td>
                    <td className="added" style={{ textAlign: "center" }}>
                      {item.Added}
                    </td>
                    <td className="actions">
                      <button onClick={() => handleShow(item.Id)}>
                        <BsEye />
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
