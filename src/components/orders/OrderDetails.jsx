import CalenderIcon from "@icons/CalenderIcon";
import CardIcon from "@icons/CardIcon";
import ShippingIcon from "@icons/ShippingIcon";
import OrderDetailsBox from "./OrderDetailsBox/OrderDetailsBox";
import PersonIcon from "@icons/PersonIcon";
import MailIcon from "@icons/MailIcon";
import PhoneIcon from "@icons/PhoneIcon";
import LocationIcon from "@icons/LocationIcon";
import OrderInvoice from "./OrderInvoice/OrderInvoice";

function OrderDetails(props) {
  const { order, user } = props;

  const formatId = (id) => {
    return id.length > 12 ? id.substring(id.length - 6) : id;
  };

  return order ? (
    <div className="order-details p-4">
      <div className="d-flex">
        <OrderDetailsBox
          header={`Order #${formatId(order._id)}`}
          order={order}
          list={[
            {
              icon: <CalenderIcon />,
              label: "Added",
              value: new Date(order.createdAt).toDateString(),
            },
            {
              icon: <CardIcon />,
              label: "Payment Method",
              value: order.payment,
            },
            {
              icon: <ShippingIcon />,
              label: "Shipping Method",
              value: "Flat Shipping",
            },
          ]}
        />
        <OrderDetailsBox
          header="Customer"
          list={[
            {
              icon: <PersonIcon />,
              label: "Customer",
              value: order.name,
            },
            {
              icon: <MailIcon />,
              label: "Email",
              value: order.email,
            },
            {
              icon: <PhoneIcon />,
              label: "Phone",
              value: order.phone,
            },
          ]}
        />
        <OrderDetailsBox
          header="Address"
          list={[
            {
              icon: <LocationIcon />,
              label: "Billing",
              value: `${order.address}, ${order.city}`,
            },
            {
              icon: <CardIcon />,
              label: "Wallet",
              value: `$ ${user?.wallet || 0} `,
            },
          ]}
        />
      </div>
      <OrderInvoice order={order} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default OrderDetails;
