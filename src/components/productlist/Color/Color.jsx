import { useState } from "react";
import "./color.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsXLg } from "react-icons/bs";
import _ from "lodash";

function Color() {
  const [num, setNum] = useState(1);
  const [Color, setColor] = useState("Select a color");
  const [showColor, setShowColor] = useState(false);

  const handleColor = (value) => {
    setColor(value);
    setShowColor(false);
  };

  const list = _.range(0, num);
  const addColor = () => {
    setNum(num + 1);
  };

  const removeColor = () => {
    setNum(num - 1);
  };

  return (
    <div className="color my-3">
      <h2>Colors</h2>
      {list.map(() => {
        return (
          <>
            <div className="d-flex align-items-end">
              <div className="d-flex flex-column flex-grow-1 ">
                <p>Color</p>
                <div className="dis-type half px-3 d-flex align-items-center justify-content-between me-3">
                  <p
                    className="m-0 flex-grow-1"
                    onClick={() => setShowColor(!showColor)}
                  >
                    {Color}
                  </p>
                  <div
                    className="fs-4 mt-0"
                    onClick={() => setColor(!showColor)}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  {showColor && (
                    <ul>
                      <li onClick={() => handleColor("value")}>bala bla</li>
                      <li onClick={() => handleColor("value")}>bala bla</li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="cancel ms-3" onClick={removeColor}>
                <BsXLg />
              </div>
            </div>
          </>
        );
      })}
      <div className="add">
        <button onClick={addColor}>+ Add Size</button>
      </div>
    </div>
  );
}
export default Color;
