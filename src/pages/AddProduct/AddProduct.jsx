import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductHeader from "@components/Products/ProductHeader/ProductHeader";
import FormBox from "@components/FormBox/FormBox";
import FormControl from "@components/FormControl/FormControl";
import { useForm } from "react-hook-form";
import axios from "../../axios";
import Button from "@components/Button/Button";
import Modal from "@components/Modal/Modal";
import LinkIcon from "@icons/LinkIcon";
import ProductModalContent from "@components/Modal/ModalContent/ProductModalContent/ProductModalContent";
import CloseIcon from "@icons/CloseIcon";
import PlusIcon from "@icons/PlusIcon";

import styles from "./addProduct.module.scss";
import { ToastContainer, toast } from "react-toastify";

const sizeLabels = [
  { _id: 0, name: "XS" },
  { _id: 1, name: "S" },
  { _id: 2, name: "M" },
  { _id: 3, name: "L" },
  { _id: 4, name: "XL" },
  { _id: 5, name: "XXL" },
  { _id: 6, name: "XXXL" },
];

const AddProduct = () => {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState("");
  const [subCategories, setSubCategories] = React.useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = React.useState("");
  const [media, setMedia] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [linkedProducts, setLinkedProducts] = React.useState([]);
  const [sizes, setSizes] = React.useState([{ key: "XS", value: 1 }]);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    defaultValues: {},
  });

  const getCategories = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
  };

  const getSubCategories = useCallback(async () => {
    if (selectedCategoryId) {
      const res = await axios.get(
        `/subcategory/main_category/${selectedCategoryId}`
      );
      setSubCategories(res.data.response);
      if (res.data?.response?.length) {
        setSelectedSubCategoryId(res.data.response?.[0]._id);
      }
    }
  }, [selectedCategoryId]);

  React.useEffect(() => {
    getCategories();
  }, []);

  React.useEffect(() => {
    getSubCategories();
  }, [selectedCategoryId, getSubCategories]);

  const onChangeCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const onChangeSubCategory = (subCategoryId) => {
    console.log("change subCategory");
    console.log("subCategoryId= ", subCategoryId);
    setSelectedSubCategoryId(subCategoryId);
  };

  const onChangeFiles = async (event) => {
    const files = event.target.files;
    console.log(event.target.files);
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("files", files[i]);
    }
    const res = await axios.post("/upload-multiple", data);
    setMedia(res.data);
  };

  const onClickLinkProducts = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const onClickAddSize = (event) => {
    event.preventDefault();
    // { key: 'XS', value: 1 }
    setSizes([...sizes, { key: "XS", value: 1 }]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // const onChangeSizeKey = (idx, value) => {
  //   const newSizes = [...sizes];
  //   newSizes[idx].key = value;
  //   setSizes(newSizes);
  // };

  // const onChangeSizeValue = (idx, value) => {
  //   const newSizes = [...sizes];
  //   newSizes[idx].value = value;
  //   setSizes(newSizes);
  // };

  const onDeleteSize = (e) => {
    e.preventDefault();
    const newSizes = [...sizes];
    newSizes.pop();
    setSizes(newSizes);
  };

  const getLinkedProducts = () => {
    return linkedProducts.map((product) => product._id);
  };

  const onSubmit = async (values) => {
    console.log(values);
    const linked_products = getLinkedProducts();

    const data = {
      ...values,
      category: selectedCategoryId,
      subCategory: selectedSubCategoryId,
      images: media,
      dressing: false,
      linked_products: linked_products,
      quantity: {
        OS: values.quantity,
      },
      desc: {
        type: "cotton",
      },
      SKU: values.sku,
    };
    try {
      const res = await axios.post("/product/create", data);
      toast.success("Product created Successfully !");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal show={showModal} handleClose={handleClose}>
        <ProductModalContent
          handleClose={handleClose}
          linkedProducts={linkedProducts}
          setLinkedProducts={setLinkedProducts}
        />
      </Modal>
      <form className={styles["add-product"]} onSubmit={handleSubmit(onSubmit)}>
        <ProductHeader />
        <div className={styles.boxes}>
          <div>
            <FormBox title="general information">
              <FormControl
                register={register}
                label="product name"
                name="name"
                type="text"
                errors={errors}
              />
              <FormControl
                register={register}
                label="product brand"
                name="brand"
                type="text"
                errors={errors}
              />
              <FormControl
                register={register}
                label="product description"
                name="description"
                type="textarea"
                errors={errors}
              />
            </FormBox>
            <FormBox title="media">
              <FormControl
                label="photos"
                name="photos"
                type="file"
                multiple="multiple"
                media={media}
                onChange={onChangeFiles}
                errors={errors}
              />
            </FormBox>
            <FormBox title="pricing" col={2}>
              <FormControl
                register={register}
                label="price"
                name="price_before"
                type="text"
                errors={errors}
              />
              <FormControl
                register={register}
                label="price after discount"
                name="price_after"
                type="text"
                errors={errors}
              />
            </FormBox>

            <FormBox title="Inventory" col={3}>
              <FormControl
                register={register}
                label="sku"
                name="sku"
                type="text"
                errors={errors}
              />
              <FormControl
                register={register}
                label="color"
                name="color"
                type="text"
                errors={errors}
              />
              <FormControl
                register={register}
                label="quantity"
                name="quantity"
                type="number"
                errors={errors}
              />
            </FormBox>
            <FormBox title="sizes">
              <div className={styles.sizes}>
                {sizes.map((size, idx) => (
                  <div className={styles.size} key={idx}>
                    <FormControl
                      label="size"
                      name="size"
                      type="select"
                      list={sizeLabels}
                      // onChange={(idx) => onChangeSizeKey(idx)}
                    />
                    <FormControl
                      register={register}
                      label="quantity"
                      name="quantity"
                      type="number"
                      errors={errors}
                    />
                    <button onClick={onDeleteSize}>
                      <CloseIcon />
                    </button>
                  </div>
                ))}

                <Button variant="invert" onClick={onClickAddSize}>
                  <PlusIcon />
                  <span>add size</span>
                </Button>
              </div>
            </FormBox>
            <FormBox title="linked products">
              <div className={styles["linked-products"]}>
                {!!linkedProducts?.length && (
                  <ul>
                    {linkedProducts.map((linkedProduct) => (
                      <li key={linkedProduct._id}>
                        <img
                          src={linkedProduct?.images[0]?.secure_url}
                          alt={linkedProduct?.images[0]?.public_id}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                <Button
                  variant="primary"
                  onClick={(event) => onClickLinkProducts(event)}
                >
                  <LinkIcon />
                  <span>link from products</span>
                </Button>
              </div>
            </FormBox>
          </div>
          <div>
            <FormBox title="category">
              <FormControl
                label="main category"
                name="category"
                type="select"
                list={categories}
                onChange={onChangeCategory}
              />
              <FormControl
                label="sub category"
                name="subCategory"
                type="select"
                list={subCategories}
                onChange={onChangeSubCategory}
              />
            </FormBox>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
