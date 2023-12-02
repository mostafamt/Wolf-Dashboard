import React from "react";
import { useState } from "react";
import {
  BsCalendar,
  BsChevronDown,
  BsSliders,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";
import _ from "lodash";
import axios from "../../axios";
import { useAuth } from "../../hooks/use-auth";
import Order from "./Order/Order";
import DateFromTo from "../Filters/DateFromTo/DateFromTo";

const dates = [
  {
    label: "All Time",
  },
  {
    label: "12 Months",
  },
  {
    label: "30 Days",
  },
  {
    label: "7 Days",
  },
  {
    label: "24 Hours",
  },
];

function OrdersTable() {
  const [orders, setOrders] = React.useState([]);
  const [active, setActive] = useState(dates[0].label);
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const { token } = useAuth();
  const [filter, setFilter] = React.useState({
    open: false,
    name: "",
  });

  const fetchOrdersInDate = async (date) => {
    const res = await axios.get(`/order/filter?date=${date}`);
    setOrders(res.data);
  };

  const fetchOrders = async () => {
    const res = await axios.get("/order", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setOrders(res.data);
  };

  React.useEffect(() => {
    fetchOrders();
  }, []);

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(orders.length / 8));

  const onChangeDate = (label) => {
    setActive(label);
    fetchOrdersInDate(label);
  };

  const handleShowFilter = (name) => {
    if (filter.name === name) {
      setFilter((prevState) => ({ ...prevState, open: !prevState.open }));
    } else {
      setFilter((prevState) => ({ ...prevState, name }));
    }
  };

  return (
    <div className="product-list">
      <div className="inps d-flex justify-content-between">
        <div className="select-time d-flex ">
          <ul>
            {dates.map((date) => (
              <li
                key={date.label}
                className={active === date.label && "active"}
                onClick={() => onChangeDate(date.label)}
              >
                {date.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex ">
          <button
            className="calender"
            onClick={() => handleShowFilter("added")}
          >
            <BsCalendar />
            <span>Added From To</span>
          </button>
          <button
            className="filter me-5"
            onClick={() => handleShowFilter("modified")}
          >
            <BsSliders />
            <span>Modified From To</span>
          </button>
        </div>
      </div>
      {filter.open && filter.name === "added" && (
        <DateFromTo title="added from to" />
      )}
      {filter.open && filter.name === "modified" && (
        <DateFromTo title="modified from to" />
      )}
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
            {orders.map((order, index) => {
              if (index >= startItem && index < endItem) {
                return <Order key={order._id} order={order} />;
              }
            })}
          </tbody>
        </table>
        <div className="tfooter">
          <div className="showing">
            {endItem < orders.length ? (
              <span>
                {" "}
                Showing {startItem + 1}-{endItem} from {orders.length}{" "}
              </span>
            ) : (
              <span>
                {" "}
                Showing {startItem + 1}-{orders.length} from {orders.length}{" "}
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
              if (orders.length / 8 > value) {
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
                if (startItem <= 8 * (Math.ceil(orders.length / 8) - 2)) {
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
export default OrdersTable;
