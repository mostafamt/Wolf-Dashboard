import { BsChevronRight } from "react-icons/bs";
import OrdersTable from "@components/orders/OrdersTable";

const Orders = () => {
  return (
    <div className="orders">
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h2>Order</h2>
          <div className="path">
            <span>Order</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Order List</span>
          </div>
        </div>
      </div>
      <OrdersTable />
    </div>
  );
};

export default Orders;
