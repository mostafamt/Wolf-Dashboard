import { RiArrowUpSFill, RiCashFill } from "react-icons/ri";
import { TbShoppingCartCopy } from "react-icons/tb";
import CustomerTable from "./CustomerTable";

const CustomerOrders = (props) => {
  const { orders } = props;

  const calculateTotalSpent = () => {
    const sum = orders?.reduce((acc, order) => {
      return acc + Number.parseInt(order.totalPrice);
    }, 0);
    return sum;
  };

  return (
    <div className="user-orders flex-grow-1">
      <div className="d-flex flex-column">
        <div className="static d-flex ">
          <div className="d-flex justify-content-between flex-grow-1 ">
            <div className="d-felx flex-column ">
              <h2>Total Orders</h2>
              <p>{orders?.length || 0}</p>
              {/* <div className="d-flex rate">
                <span>
                  1% <RiArrowUpSFill />
                </span>
                <span>+24 this month</span>
              </div> */}
            </div>
            <div className="icon icon-one">
              <TbShoppingCartCopy />
            </div>
          </div>
          <div className="d-flex justify-content-between flex-grow-1 ">
            <div className="d-felx flex-column ">
              <h2>Total Spent</h2>
              <p>{calculateTotalSpent()}</p>
              {/* <div className="d-flex rate">
                <span>
                  1% <RiArrowUpSFill />
                </span>
                <span>+24 this month</span>
              </div> */}
            </div>
            <div className="icon icon-two">
              <RiCashFill />
            </div>
          </div>
        </div>
        <div className="main">
          <h1>Order History</h1>
          <CustomerTable orders={orders} />
        </div>
      </div>
    </div>
  );
};
export default CustomerOrders;
