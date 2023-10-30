import _ from "lodash";

import { useContext, useState } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsEye,
  BsPencil,
  BsTrash,
} from "react-icons/bs";
import { BannerContext } from "../Banner";
function Ad({ list }) {
  const { edit, setEdit, bannerId, setBannerId } = useContext(BannerContext);
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(0);
  const editCulc = (value) => {
    setStartItem((value - 1) * 1);
    setEndItem(value * 1);
  };
  const handleEdit = (value) => {
    setBannerId(value);
    setEdit(true);
  };

  const paginations = _.range(0, Math.ceil(list.length / 1));
  return (
    <div className="ad">
      {list.map((item, index) => {
        if (item.Id == startItem + 1) {
          return <img src={item.image} />;
        }
      })}
      <div className="footer">
        <div className="showing">
          {endItem < list.length ? (
            <span>
              {" "}
              Showing {startItem + 1}-{endItem} from {list.length}{" "}
            </span>
          ) : (
            <span>
              {" "}
              Showing {startItem + 1}-{list.length} from {list.length}{" "}
            </span>
          )}
        </div>
        <div className="d-flex">
          <ul>
            <li
              onClick={() => {
                if (startItem >= 1) {
                  setStartItem(startItem - 1);
                  setEndItem(endItem - 1);
                }
              }}
            >
              <BsChevronLeft />
            </li>
            {paginations.map((value) => {
              if (list.length / 1 > value) {
                return (
                  <li
                    className={`${startItem == value * 1 && "active"}`}
                    onClick={() => editCulc(value + 1)}
                  >
                    {value + 1}
                  </li>
                );
              }
            })}
            <li
              onClick={() => {
                if (startItem <= 1 * (Math.ceil(list.length / 1) - 2)) {
                  setStartItem(startItem + 1);
                  setEndItem(endItem + 1);
                }
              }}
            >
              <BsChevronRight />
            </li>
          </ul>
          <div className="ms-3">
            <span className="me-2" style={{ cursor: "pointer" }}>
              <BsEye />
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleEdit(startItem + 1)}
            >
              <BsPencil />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ad;
