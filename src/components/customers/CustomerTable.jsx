import React from "react";
import { BsChevronDown, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import _ from "lodash";

function ProductListTable(props) {
  const { orders } = props;
  const [headDrop, setheadDrop] = React.useState("");
  const [startItem, setStartItem] = React.useState(0);
  const [endItem, setEndItem] = React.useState(8);

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(orders?.length / 8));

  return orders ? (
    <div className="product-list m-0 p-0">
      <div className="table m-0 p-0">
        <table className="m-0">
          <thead>
            <tr className="">
              <td>Order Id</td>
              <td>Product </td>
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
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              if (index >= startItem && index < endItem) {
                return (
                  <tr key={order._id}>
                    <td
                      className="sku"
                      style={{ color: "#5C59E8", textAlign: "left" }}
                    >
                      #{order._id}
                    </td>
                    <td>
                      <div className="d-flex product-desc justify-content-center">
                        <img src={order?.products[0].image[0].secure_url} />
                        <div>
                          <p>{order?.products[0].name}</p>
                          <span>
                            {order?.products?.length > 1 && (
                              <>+{order?.products.length - 1}</>
                            )}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="category" style={{ textAlign: "left" }}>
                      {order.totalPrice}
                    </td>
                    <td className="status">
                      <p
                        className={`${
                          order.status == "shipped"
                            ? "ship"
                            : order.status == "processing"
                            ? "process"
                            : ""
                        }`}
                      >
                        {order.status}
                      </p>
                    </td>
                    <td className="added" style={{ textAlign: "center" }}>
                      {new Date(order.updatedAt).toDateString()}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div className="tfooter">
          <div className="showing">
            {endItem < orders?.length ? (
              <span>
                {" "}
                Showing {startItem + 1}-{endItem} from {orders.length}{" "}
              </span>
            ) : (
              <span>
                {" "}
                Showing {startItem + 1}-{orders?.length} from {orders.length}{" "}
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
              if (orders?.length / 8 > value) {
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
                if (startItem <= 8 * (Math.ceil(orders?.length / 8) - 2)) {
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
  ) : (
    <p>Loading...</p>
  );
}
export default ProductListTable;
