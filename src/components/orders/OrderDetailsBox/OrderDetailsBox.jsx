const OrderDetailsBox = (props) => {
  const { header, list, order } = props;

  const handleShowStatus = (order) => {
    let out = <></>;
    if (order.replacerequest && order.replacerequest !== "none") {
      out = (
        <span className="processing">
          {`Replace (${order.replacerequest})`}
        </span>
      );
    } else if (order.returnrequest && order.returnrequest !== "none") {
      out = (
        <span className="processing">{`Return (${order.returnrequest})`}</span>
      );
    } else {
      out = <span className="processing">{order.status}</span>;
    }
    return out;
  };

  return (
    <div className="details  flex-grow-1">
      <h2>
        {header}
        {header.includes("Order") && handleShowStatus(order)}
      </h2>
      <div>
        {list.map((item, idx) => (
          <div key={idx} className="item d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span className="icon me-2 ">{item.icon}</span>
              {item.label}
            </div>
            <p className="m-0">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsBox;
