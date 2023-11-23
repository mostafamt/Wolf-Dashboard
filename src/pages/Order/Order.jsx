import React from "react";
import { BsChevronRight } from "react-icons/bs";
import OrderDetails from "@components/orders/OrderDetails";
import { useNavigate, useParams } from "react-router-dom";
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

const replaceStatus = [
  {
    id: 1,
    label: "Replace (Requested)",
    value: "requested",
  },
  {
    id: 2,
    label: "Replace (Waiting for pick up)",
    value: "waiting for pick up",
  },
  {
    id: 3,
    label: "Replace (Picked up)",
    value: "picked up",
  },
  {
    id: 4,
    label: "Replace (Replaced)",
    value: "replaced",
  },
];

const Order = () => {
  const params = useParams();
  const { id } = params;
  const { token } = useAuth();
  const [order, setOrder] = React.useState();
  const [user, setUser] = React.useState();
  const navigate = useNavigate();

  const fetchData = async (id) => {
    let res = await axios.get(`/order/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setOrder(res.data);
    res = await axios.get(`/user/${res.data.user_id}`);
    setUser(res.data);
  };

  React.useEffect(() => {
    fetchData(id);
  }, []);

  const onChangeOrderStatus = async (value) => {
    await axios.put(`/order/${id}`, {
      status: value,
    });
    await fetchData(id);
    toast.success("Order status changed successfully!");
    // setTimeout(() => {
    //   navigate("/orders");
    // }, 2000);
  };

  const onChangeReturnOrderStatus = async (value) => {
    await axios.put(`/order/${id}`, {
      returnrequest: value,
    });
    await fetchData(id);
    toast.success("Order status changed successfully!");
    // setTimeout(() => {
    //   navigate("/orders");
    // }, 2000);
  };

  const onChangeReplaceOrderStatus = async (value) => {
    await axios.put(`/order/${id}`, {
      replacerequest: value,
    });
    await fetchData(id);
    toast.success("Order status changed successfully!");
    // setTimeout(() => {
    //   navigate("/orders");
    // }, 2000);
  };

  const handleShowDropDown = () => {
    let dropDown = <></>;
    console.log("order= ", order);
    if (order.replacerequest && order.replacerequest !== "none") {
      dropDown = (
        <select
          name="status"
          id="status"
          value={order.replacerequest}
          onChange={(e) => onChangeReplaceOrderStatus(e.target.value)}
        >
          {replaceStatus.map((state) => (
            <option key={state.id} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      );
    } else if (order.returnrequest && order.returnrequest !== "none") {
      dropDown = (
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
      );
    } else {
      dropDown = (
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
      );
    }
    return dropDown;
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
        <div>{handleShowDropDown()}</div>
      </div>
      <OrderDetails order={order} user={user} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Order;
