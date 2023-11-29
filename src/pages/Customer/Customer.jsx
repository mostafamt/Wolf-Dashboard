import React from "react";
import TitleTwo from "@components/customers/TitleTwo";
import CustomerInfo from "@components/customers/CustomerInfo";
import CustomerOrders from "@components/customers/CustomerOrders";
import axios from "../../axios";
import { useParams } from "react-router-dom";

const Customer = () => {
  const [orders, setOrders] = React.useState();
  const params = useParams();
  const { id } = params;

  const fetchOrders = async (userId) => {
    const res = await axios.get(`/order/customer/${userId}`);
    setOrders(res.data);
    console.log("res= ", res.data);
  };

  React.useEffect(() => {
    fetchOrders(id);
  }, []);

  return (
    <div className="customer">
      <TitleTwo />
      <div className="d-flex px-4 ">
        <CustomerInfo lastOrder={orders?.[0].updatedAt || ""} />
        <CustomerOrders orders={orders} />
      </div>
    </div>
  );
};

export default Customer;
