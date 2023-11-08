import React from "react";
import { useState } from "react";
import {
  BsCalendar,
  BsChevronDown,
  BsSearch,
  BsSliders,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";
import _ from "lodash";
import axios from "../../axios";
import Product from "@components/productlist/Product/Product";
import { useNavigate } from "react-router-dom";
import Modal from "@components/Modal/Modal";
import CircleDeleteIcon from "@icons/CircleDeleteIcon";
import DeleteIcon from "@icons/DeleteIcon";
import CloseIcon from "@icons/CloseIcon";
import Button from "@components/Button/Button";

import styles from "./products.module.scss";
import { ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";

const Products = () => {
  const [searchByProduct, setSearchByProduct] = useState();
  const [searchBySuppliar, setSearchBySuppliar] = useState();
  const [headDrop, setheadDrop] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(8);
  const [check, setCheck] = useState(false);
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios.get("/product");
    setProducts(res.data);
    console.log("products= ", products);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const editCulc = (value) => {
    setStartItem((value - 1) * 8);
    setEndItem(value * 8);
  };

  const handleCheckOut = (value, id) => {
    setCheck(true);
    value.classList.toggle("check-active");
  };

  const num = 8;
  const paginations = _.range(0, Math.ceil(products.length / 8));

  const onClickAddProduct = () => {
    navigate("/products/add");
  };

  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setActiveId(id);
    setShow(true);
  };

  const onDeleteProduct = async () => {
    const data = axios.delete(`/product/${activeId}`);
    handleClose();
    toast.success("Product deleted Successfully!");
  };

  return (
    <>
      <ToastContainer />
      <Modal show={show} handleClose={handleClose}>
        <div className={styles["modal-content"]}>
          <CircleDeleteIcon />
          <h4>Delete Product</h4>
          <p>Are you sure to delete this product?</p>

          <div>
            <Button type="secondary" onClick={handleClose}>
              <CloseIcon />
              <span>cancel</span>
            </Button>
            <Button
              type="primary"
              className={styles.primary}
              onClick={onDeleteProduct}
            >
              <DeleteIcon />
              <span>delete product</span>
            </Button>
          </div>
        </div>
      </Modal>
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h2>Product</h2>
          <div className="path">
            <span>Product</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Product List</span>
          </div>
        </div>
        <button onClick={onClickAddProduct}>+ Add Product</button>
      </div>
      <div className="product-list">
        <div className="inps d-flex justify-content-between">
          <div className="d-flex ">
            <div className="search">
              <BsSearch />
              <input
                type="text"
                value={searchByProduct}
                onChange={(e) => setSearchByProduct(e.target.value)}
                placeholder="Search by product name. . ."
                className="flex-grow-1"
              />
            </div>
            <div className="search">
              <BsSearch />
              <input
                type="text"
                value={searchBySuppliar}
                onChange={(e) => setSearchBySuppliar(e.target.value)}
                placeholder="Search by supplier. . ."
                className="flex-grow-1"
              />
            </div>
          </div>
          <div className="d-flex ">
            <div className="calender">
              <BsCalendar />
              <span>Added from to</span>
            </div>
            <div className="calender">
              <BsCalendar />
              <span>Added from to</span>
            </div>
            <div className="filter">
              <BsSliders />
              <span>Added from to</span>
            </div>
          </div>
        </div>
        <div className="table">
          <table className="">
            <thead>
              <tr className="">
                <td> </td>
                <td>
                  <div
                    className="d-flex justify-content-between align-items-center flex-grow-1"
                    onClick={() => setheadDrop("product")}
                  >
                    <span>Product</span>
                    <BsChevronDown />
                    {headDrop == "product" && (
                      <ul>
                        <li>k</li>
                        <li>dd/</li>
                        <li>dd</li>
                      </ul>
                    )}
                  </div>
                </td>
                <td>SKU</td>
                <td>Category</td>
                <td>
                  <div
                    className="d-flex justify-content-between align-items-center flex-grow-1"
                    onClick={() => setheadDrop("stock")}
                  >
                    <span>Stock</span>
                    <BsChevronDown />
                    {headDrop == "stock" && (
                      <ul>
                        <li>k</li>
                        <li>dd/</li>
                        <li>dd</li>
                      </ul>
                    )}
                  </div>
                </td>
                <td>
                  <div
                    className="d-flex justify-content-between align-items-center flex-grow-1"
                    onClick={() => setheadDrop("price")}
                  >
                    <span>Price</span>
                    <BsChevronDown />
                    {headDrop == "price" && (
                      <ul>
                        <li>k</li>
                        <li>dd/</li>
                        <li>dd</li>
                      </ul>
                    )}
                  </div>
                </td>
                <td>
                  <div
                    className="d-flex justify-content-between align-items-center flex-grow-1"
                    onClick={() => setheadDrop("status")}
                  >
                    <span>Status</span>
                    <BsChevronDown />
                    {headDrop == "status" && (
                      <ul>
                        <li>k</li>
                        <li>dd/</li>
                        <li>dd</li>
                      </ul>
                    )}
                  </div>
                </td>
                <td>
                  <div
                    className="d-flex justify-content-between align-items-center flex-grow-1"
                    onClick={() => setheadDrop("added")}
                  >
                    <span>Added</span>
                    <BsChevronDown />
                    {headDrop == "added" && (
                      <ul>
                        <li>k</li>
                        <li>dd/</li>
                        <li>dd</li>
                      </ul>
                    )}
                  </div>
                </td>
                <td onClick={() => setheadDrop("")}>Action</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                if (index >= startItem && index < endItem) {
                  return (
                    <Product
                      key={product._id}
                      product={product}
                      handleCheckOut={handleCheckOut}
                      handleShow={handleShow}
                    />
                  );
                }
              })}
            </tbody>
          </table>
          <div className="tfooter">
            <div className="showing">
              {endItem < products.length ? (
                <span>
                  {" "}
                  Showing {startItem + 1}-{endItem} from {products.length}{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  Showing {startItem + 1}-{products.length} from{" "}
                  {products.length}{" "}
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
                if (products.length / 8 > value) {
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
                  if (startItem <= 8 * (Math.ceil(products.length / 8) - 2)) {
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
      </div>
    </>
  );
};

export default Products;
