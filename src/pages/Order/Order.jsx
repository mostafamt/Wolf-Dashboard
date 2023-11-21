import React from "react";
import { BsChevronRight } from "react-icons/bs";
import OrderDetails from "@components/orders/OrderDetails";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../axios";
import styles from "./order.module.scss";
import { toast } from "react-toastify";

const status = [
  {
    id: 1,
    label: "Processing",
    value: "processing",
  },
  {
    id: 2,
    label: "Shipped",
    value: "shipped",
  },
  {
    id: 3,
    label: "Delivered",
    value: "delivered",
  },
  {
    id: 4,
    label: "Cancelled",
    value: "cancelled",
  },
];

const returnStatus = [
  {
    id: 1,
    label: "Return (Requested)",
    value: "requested",
  },
  {
    id: 2,
    label: "Return (Waiting for pick up)",
    value: "waiting for pick up",
  },
  {
    id: 3,
    label: "Return (Picked up)",
    value: "picked up",
  },
  {
    id: 4,
    label: "Return (Returned)",
    value: "returned",
  },
];

const Order = () => {
  const params = useParams();
  const { id } = params;
  const { token } = useAuth();
  const [order, setOrder] = React.useState();

  const fetchOrder = async (id) => {
    const res = await axios.get(`/order/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setOrder(res.data);
    console.log("res= ", res);
  };

  React.useEffect(() => {
    fetchOrder(id);
  }, []);

  const onChangeOrderStatus = (value) => {
    console.log(value);
    setOrder({ ...order, status: value });
    axios.put(`/order/${id}`, {
      status: value,
    });
    fetchOrder(id);
    toast.success("Order status changed successfully!");
  };

  const onChangeReturnOrderStatus = (value) => {
    console.log(value);
    // setOrder({ ...order, status: value });
    axios.put(`/order/${id}`, {
      returnrequest: value,
    });
    fetchOrder(id);
    toast.success("Order status changed successfully!");
  };

  return order ? (
    <div className={`${styles.order} orders`}>
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h2>Order Details</h2>
          <div className="path">
            <span>Order</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Order List</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Order Details</span>
          </div>
        </div>
        <div>
          {order.returnrequest !== "none" ? (
            <select
              name="status"
              id="status"
              value={order.returnrequest}
              onChange={(e) => onChangeReturnOrderStatus(e.target.value)}
            >
              {returnStatus.map((state) => (
                <option key={state.id} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          ) : (
            <select
              name="status"
              id="status"
              value={order.status}
              onChange={(e) => onChangeOrderStatus(e.target.value)}
            >
              {status.map((state) => (
                <option key={state.id} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <OrderDetails order={order} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Order;
