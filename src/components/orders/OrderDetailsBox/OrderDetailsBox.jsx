const OrderDetailsBox = (props) => {
  const { header, list } = props;
  return (
    <div className="details  flex-grow-1">
      <h2>
        {header}
        {header.includes("Order") && (
          <span className="processing">Processing</span>
        )}
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
