import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductHeader from "@components/Products/ProductHeader/ProductHeader";
import FormBox from "@components/FormBox/FormBox";
import FormControl from "@components/FormControl/FormControl";
import { useForm } from "react-hook-form";
import axios from "../../axios";

import styles from "./addProduct.module.scss";

const AddProduct = () => {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState("");
  const [subCategories, setSubCategories] = React.useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = React.useState("");
  const [media, setMedia] = React.useState([]);
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
      if (res.data.length === 1) {
        console.log("here");
        setSelectedSubCategoryId(res.data[0]._id);
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
    setMedia(res.data?.urls);
  };

  const onSubmit = async (values) => {
    console.log(values);
    const data = {
      ...values,
      category: selectedCategoryId,
      subCategory: selectedSubCategoryId,
      images: media,
      dressing: false,
      quantity: {
        OS: values.quantity,
      },
      desc: {
        type: "cotton",
      },
      SKU: values.sku,
    };
    const res = await axios.post("/product/create", data);
    console.log(res.data);
  };

  return (
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
  );
};

export default AddProduct;
