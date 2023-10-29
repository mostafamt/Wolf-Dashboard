import Image from "../../assets/Img.png";
import { BsCalendar } from "react-icons/bs";

function OrderDetails(props) {
  return (
    <div className="order-details p-4">
      <div className="d-flex">
        <div className="details  flex-grow-1">
          <h2>
            Order #302011 <span className="processing">Processing</span>
          </h2>
          <div className="">
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
          </div>
        </div>
        <div className="details flex-grow-1">
          <h2>
            Order #302011 <span className="processing">Processing</span>
          </h2>
          <div className="">
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
          </div>
        </div>
        <div className="details flex-grow-1">
          <h2>
            Order #302011 <span className="processing">Processing</span>
          </h2>
          <div className="">
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
            <div className="item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon me-2 ">
                  <BsCalendar />
                </span>
                Add
              </div>
              <p className="m-0">12 Dec 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-list">
        <h2>
          Order List <span className="pro-num">2 Products</span>
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
            <tr>
              <td>
                <div className="d-flex product-desc">
                  <img src={Image} />
                  <div>
                    <p>تيشيرت بولو مطبع</p>
                    <span>Blue</span>
                  </div>
                </div>
              </td>
              <td className="sku" style={{ color: "#5C59E8" }}>
                165999
              </td>
              <td style={{ textAlign: "right" }}>1 pcs</td>
              <td className="price" style={{ textAlign: "right" }}>
                $599.599
              </td>
              <td className="total" style={{ textAlign: "right" }}>
                $599.599
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex product-desc">
                  <img src={Image} />
                  <div>
                    <p>تيشيرت بولو مطبع</p>
                    <span>Blue</span>
                  </div>
                </div>
              </td>
              <td className="sku" style={{ color: "#5C59E8" }}>
                165999
              </td>
              <td style={{ textAlign: "right" }}>1 pcs</td>
              <td className="price" style={{ textAlign: "right" }}>
                $599.599
              </td>
              <td className="total" style={{ textAlign: "right" }}>
                $599.599
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "right" }}>Subtotal</td>
              <td style={{ textAlign: "right" }}>$526.479</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "right" }}>Subtotal</td>
              <td style={{ textAlign: "right" }}>$526.479</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "right" }}>Subtotal</td>
              <td style={{ textAlign: "right" }}>$526.479</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ textAlign: "right" }}>Subtotal</td>
              <td style={{ textAlign: "right" }}>$526.479</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderDetails;
