import { useState } from "react";
import "./sizing.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsXLg } from "react-icons/bs";
import _ from "lodash";

function Sizing() {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState("Select a size");
  const [quantity, setQuantity] = useState("");
  const [showsize, setShowsize] = useState(false);
  const [showShoes, setShowShoes] = useState(false);
  const [showCloths, setShowCloths] = useState(false);

  const handleSize = (value) => {
    setSize(value);
    setShowsize(false);
  };
  const handleShoes = () => {
    setShowShoes(!showShoes);
  };
  const handleClothes = () => {
    setShowCloths(!showCloths);
  };

  const list = _.range(0, num);
  const addSize = () => {
    setNum(num + 1);
  };

  const removeSize = () => {
    setNum(num - 1);
  };

  return (
    <div className="sizing my-3">
      <h2>Sizes</h2>
      {list.map(() => {
        return (
          <>
            <div className="d-flex align-items-end">
              <div className="d-flex flex-column flex-grow-1 ">
                <p>Size</p>
                <div className="dis-type half px-3 d-flex align-items-center justify-content-between me-3">
                  <p
                    className="m-0 flex-grow-1"
                    onClick={() => setShowsize(!showsize)}
                  >
                    {size}
                  </p>
                  <div
                    className="fs-4 mt-0"
                    onClick={() => setShowsize(!showsize)}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  {showsize && (
                    <ul>
                      <p className="shoes" onClick={() => handleShoes()}>
                        Shoes
                      </p>
                      {showShoes && (
                        <>
                          <li onClick={() => handleSize("value")}>bala bla</li>
                          <li onClick={() => handleSize("value")}>bala bla</li>
                        </>
                      )}
                      <p className="cloths" onClick={() => handleClothes()}>
                        Clothes
                      </p>
                      {showCloths && (
                        <>
                          <li onClick={() => handleSize("value")}>bala bla</li>
                          <li onClick={() => handleSize("value")}>bala bla</li>
                        </>
                      )}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex-grow-1 m-0">
                <p>Quantity</p>
                <input
                  type="text"
                  name="Quantity"
                  value={quantity}
                  placeholder="Type product size here. . ."
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="cancel ms-3" onClick={removeSize}>
                <BsXLg />
              </div>
            </div>
          </>
        );
      })}
      <div className="add">
        <button onClick={addSize}>+ Add Size</button>
      </div>
    </div>
  );
}
export default Sizing;
