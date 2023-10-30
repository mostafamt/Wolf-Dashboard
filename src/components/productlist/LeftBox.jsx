import Image from "../../assets/image.png";
import { useState } from "react";
import Pricing from "./Pricing/Pricing";
import Inventory from "./Inventory/Inventory";
import Sizing from "./Sizing/Sizing";
import Color from "./Color/Color";
import LinkProduct from "./LinkProduct/LinkProduct";

function LeftBox() {
  const [productName, setProductName] = useState();
  const [productBrand, setProductBrand] = useState();
  const [productDescription, setProductDesription] = useState();

  return (
    <div className="add-left flex-grow-1">
      <div className="general">
        <h2>General Information </h2>
        <div>
          <p>Product Name</p>
          <input
            type="text"
            name="productName"
            value={productBrand}
            placeholder=". . . Type product name here"
            onChange={(e) => setProductBrand(e.target.value)}
          />
        </div>
        <div>
          <p>Product Brand</p>
          <input
            type="text"
            name="productName"
            value={productName}
            placeholder=". . . Type product brand here"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            rows={6}
            name="productName"
            value={productDescription}
            placeholder=". . . Type product name here"
            onChange={(e) => setProductDesription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="media">
        <h2>Media</h2>
        <div>
          <p>Photos</p>
          <div className="input-images">
            <div className="img">
              <img src={Image} />
            </div>
            <p>Drag and drop image here, or click add image</p>
            <button onClick={() => ""}>Add Image</button>
          </div>
        </div>
      </div>
      <Pricing />
      <Inventory />
      <Sizing />
      <Color />
      <LinkProduct />
    </div>
  );
}
export default LeftBox;
