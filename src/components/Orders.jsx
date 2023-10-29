import { createContext, useState } from "react";
import ProductListTable from "./orders/ProducListTable";
import TitleOne from "./orders/TitleOne";
import TitleTwo from "./orders/TitleTwo";
import OrderDetails from "./orders/OrderDetails";

export const OrdersContext = createContext();
function Orders() {
  const [detailsPage, setDetailsPage] = useState(false)
  const [orderId, setOrderId] = useState()
  return (
    <div className="orders">
      <OrdersContext.Provider value={{ detailsPage, setDetailsPage, orderId, setOrderId }}>
        {detailsPage ?
          <>
            <TitleTwo />
            <OrderDetails id={orderId}/>
          </>
          :
          <>
            <TitleOne />
            <ProductListTable />
          </>
        }
      </OrdersContext.Provider>
    </div>
  )
}
export default Orders;