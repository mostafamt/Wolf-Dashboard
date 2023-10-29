import React from "react";
import { useState } from "react";
import {
  BsCalendar,
  BsChevronDown,
  BsSearch,
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
import axios from "../../axios";
import { BACKEND_URL } from "../../config";

function ProductListTable() {
  const [searchByProduct, setSearchByProduct] = useState();
  const [searchBySuppliar, setSearchBySuppliar] = useState();
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const [check, setCheck] = useState(false);
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    const res = await axios.get("/product");
    setProducts(res.data);
  };

  React.useEffect(() => {
    fetchData();
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
  const paginations = _.range(0, Math.ceil(listProduct.length / 8));

  const getStock = () => {
    const {} = products;
  };

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
              placeholder="Search by product name. . ."
              className="flex-grow-1"
            />
          </div>
          <div className="search">
            <BsSearch />
            <input
              type="text"
              value={searchBySuppliar}
              onChange={(e) => setSearchBySuppliar(e.target.value)}
              placeholder="Search by supplier. . ."
              className="flex-grow-1"
            />
          </div>
        </div>
        <div className="d-flex ">
          <div className="calender">
            <BsCalendar />
            <span>Added from to</span>
          </div>
          <div className="calender">
            <BsCalendar />
            <span>Added from to</span>
          </div>
          <div className="filter">
            <BsSliders />
            <span>Added from to</span>
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
              <td>SKU</td>
              <td>Category</td>
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
            {[...products, ...listProduct].map((item, index) => {
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
                        <img
                          src={`${BACKEND_URL}/${item.images?.[0]}`}
                          alt={item.name}
                        />
                        <div>
                          <p>{item.name}</p>
                          <span>{item.ColorNum}</span>
                        </div>
                      </div>
                    </td>
                    <td className="sku">{item.SKU}</td>
                    <td className="category">{item.Category} </td>
                    <td className="stock">{item.Stock}</td>
                    <td className="price">{item.Price}</td>
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
