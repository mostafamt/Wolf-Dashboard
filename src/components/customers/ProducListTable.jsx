import React from "react";
import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useAuth } from "../../hooks/use-auth";

function ProductListTable() {
  const [searchByName, setSearchByName] = useState();
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const navigate = useNavigate();
  const [customers, setCustomers] = React.useState([]);
  const { token } = useAuth();

  const fetchCustomers = async () => {
    const res = await axios.get("/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setCustomers(res.data);
  };

  const fetchCustomersByName = async (name) => {
    const res = await axios.get(`/user/search?name=${name}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setCustomers(res.data);
  };

  React.useEffect(() => {
    fetchCustomers();
  }, []);

  React.useEffect(() => {
    if (searchByName) {
      fetchCustomersByName(searchByName);
    } else {
      fetchCustomers();
    }
  }, [searchByName]);

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const handleCheckOut = (value) => {
    value.classList.toggle("check-active");
  };
  const handleShow = (value) => {
    navigate(`/customers/${value}`);
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(customers.length / 8));

  return (
    <div className="product-list">
      <div className="inps d-flex justify-content-between">
        <div className="d-flex ">
          <div className="search">
            <BsSearch />
            <input
              type="text"
              value={searchByName}
              onChange={(e) => setSearchByName(e.target.value)}
              placeholder="Search by customer name..."
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
              <td>Total spent</td>
              <td>AVG.</td>
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
            {customers.map((customer, index) => {
              if (index >= startItem && index < endItem) {
                return (
                  <tr key={customer._id}>
                    <td>
                      <div
                        className="check"
                        onClick={(e) => handleCheckOut(e.target, customer._id)}
                      >
                        <span>
                          <BsCheckLg />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex product-desc">
                        <img
                          src={ImageProduct}
                          style={{ borderRadius: "50%" }}
                        />
                        <div>
                          <p>{`${customer.first_name} ${customer.last_name}`}</p>
                          <span>{customer.email}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {customer.telephone}
                    </td>
                    <td style={{ textAlign: "center" }}>{customer.orders}</td>
                    <td style={{ textAlign: "center" }}>
                      {customer.totalSpent} $
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {Number.parseInt(customer.totalSpent / customer.orders) ||
                        0}{" "}
                      $
                    </td>
                    <td className="added" style={{ textAlign: "center" }}>
                      {new Date(Date.now()).toDateString()}
                    </td>
                    <td className="actions">
                      <button onClick={() => handleShow(customer._id)}>
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
            {endItem < customers.length ? (
              <span>
                {" "}
                Showing {startItem + 1}-{endItem} from {customers.length}{" "}
              </span>
            ) : (
              <span>
                {" "}
                Showing {startItem + 1}-{customers.length} from{" "}
                {customers.length}{" "}
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
              if (customers.length / 8 > value) {
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
                if (startItem <= 8 * (Math.ceil(customers.length / 8) - 2)) {
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
