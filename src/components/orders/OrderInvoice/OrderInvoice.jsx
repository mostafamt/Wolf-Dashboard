const OrderInvoice = (props) => {
  const { order } = props;

  const getSubTotal = () => {
    return order.products.reduce((acc, product) => acc + product.price, 0) || 0;
  };

  return (
    <div className="order-list">
      <h2>
        Order List{" "}
        <span className="pro-num">{order.products.length} Products</span>
      </h2>
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>SKU</td>
            <td style={{ textAlign: "right" }}>QTY</td>
            <td style={{ textAlign: "right" }}>Price</td>
            <td style={{ textAlign: "right" }}>Total</td>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product, idx) => (
            <tr key={idx}>
              <td>
                <div className="d-flex product-desc">
                  <img
                    src={product.image[0].secure_url}
                    alt={product.image[0].public_id}
                  />
                  <div>
                    <p>{product.name}</p>
                    <span>{product.color}</span>
                  </div>
                </div>
              </td>
              <td className="sku" style={{ color: "#5C59E8" }}>
                {product.SKU}
              </td>
              <td style={{ textAlign: "right" }}>{product.quantity} pcs</td>
              <td className="price" style={{ textAlign: "right" }}>
                ${product.price}
              </td>
              <td className="total" style={{ textAlign: "right" }}>
                ${product.price}
              </td>
            </tr>
          ))}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ textAlign: "right" }}>Subtotal</td>
            <td style={{ textAlign: "right" }}>${getSubTotal()}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ textAlign: "right" }}>VAT (0%)</td>
            <td style={{ textAlign: "right" }}>$0</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ textAlign: "right" }}>Shipping Fees</td>
            <td style={{ textAlign: "right" }}>$0</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ textAlign: "right" }}>Grand Total</td>
            <td style={{ textAlign: "right" }}>${getSubTotal()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderInvoice;
