import { BsEye, BsPencil, BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Order = (props) => {
  const { order } = props;
  const navigate = useNavigate();

  const handleShow = (value) => {
    navigate(`/orders/${value}`);
  };

  const formatId = (id) => {
    return id.length > 12 ? id.substring(id.length - 6) : id;
  };

  return (
    <tr key={order._id}>
      <td>
        <div
          className="check"
          // onClick={(e) => handleCheckOut(e.target, item.Id)}
        >
          <span>
            <BsCheckLg />
          </span>
        </div>
      </td>
      <td className="sku" style={{ color: "#5C59E8" }}>
        #{formatId(order._id)}
      </td>
      <td>
        <div className="d-flex product-desc">
          <img
            src={order.products[0]?.image?.[0]?.secure_url}
            alt={order.products[0]?.image?.[0]?.public_id}
          />
          <div>
            <p>{order.products[0]?.name}</p>
            <span>
              {order.products.length > 1 &&
                `+${order.products.length - 1} other products`}
            </span>
          </div>
        </div>
      </td>
      <td className="category" style={{ textAlign: "left" }}>
        {new Date(order.createdAt).toDateString()}
      </td>
      <td className="stock">
        <div className="d-flex justify-content-center product-desc ">
          <div>
            <p>{order.name}</p>
            <span>{order.email}</span>
          </div>
        </div>
      </td>
      <td className="price">{order.totalPrice}</td>
      <td className="added" style={{ textAlign: "center" }}>
        {order.payment}
      </td>
      <td className="status">
        <p
          className={`${
            order.status == "processing"
              ? "low"
              : order.status == "delivered"
              ? "pub"
              : order.status == "shipped"
              ? "draft"
              : "out"
          }`}
        >
          {order.returnrequest !== "none"
            ? `Return (${order.returnrequest})`
            : order.status}
        </p>
      </td>
      <td className="actions">
        <button onClick={() => handleShow(order._id)}>
          <BsPencil />
        </button>
      </td>
    </tr>
  );
};

export default Order;
