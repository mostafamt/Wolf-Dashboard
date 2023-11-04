import { useContext, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsEye, BsPencil } from "react-icons/bs";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function MainTable(props) {
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const [listProduct, setListProduct] = useState(props.list);
  const num = 8;
  const paginations = _.range(0, Math.ceil(listProduct.length / 8));
  const navigate = useNavigate();

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };
  const handleEdit = (category) => {
    navigate(`/category/${category.Id}`, { state: { category } });
  };

  return (
    <div className="table">
      <table className="main">
        <thead>
          <tr className="">
            <td>Category</td>
            <td>Suppliers</td>
            <td>Stock</td>
            <td>Added</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((item, index) => {
            if (index >= startItem && index < endItem) {
              return (
                <tr key={item.Id}>
                  <td>
                    <div className="d-flex product-desc">
                      <div>
                        <p className="cat">{item.Category}</p>
                        <span>{item.Describtion}</span>
                      </div>
                    </div>
                  </td>
                  <td>{item.Suppliers}</td>
                  <td>{item.Stock}</td>
                  <td>{item.Added}</td>
                  <td className="actions">
                    <button onClick={() => handleEdit(item)}>
                      <BsPencil />
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="tfooter">
        <div className="showing">
          {endItem < listProduct.length ? (
            <span>
              {" "}
              Showing {startItem + 1}-{endItem} from {listProduct.length}{" "}
            </span>
          ) : (
            <span>
              {" "}
              Showing {startItem + 1}-{listProduct.length} from{" "}
              {listProduct.length}{" "}
            </span>
          )}
        </div>
        <ul>
          <li
            onClick={() => {
              if (startItem >= 8) {
                setStartItem(startItem - 8);
                setEndItem(endItem - 8);
              }
            }}
          >
            <BsChevronLeft />
          </li>
          {paginations.map((value) => {
            if (listProduct.length / 8 > value) {
              return (
                <li
                  className={`${startItem == value * num && "active"}`}
                  onClick={() => editCulc(value + 1)}
                >
                  {value + 1}
                </li>
              );
            }
          })}
          <li
            onClick={() => {
              if (startItem <= 8 * (Math.ceil(listProduct.length / 8) - 2)) {
                setStartItem(startItem + 8);
                setEndItem(endItem + 8);
              }
            }}
          >
            <BsChevronRight />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MainTable;
