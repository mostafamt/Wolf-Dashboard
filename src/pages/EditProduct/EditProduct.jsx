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
import Sizes from "../../components/Sizes/Sizes";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import styles from "./editProduct.module.scss";

const EditProduct = () => {
  const params = useParams();
  const { id } = params;
  const [categories, setCategories] = React.useState([]);
  const [subCategories, setSubCategories] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [linkedProducts, setLinkedProducts] = React.useState([]);
  const [media, setMedia] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  const getProduct = async () => {
    const res = await axios.get(`/product/${id}`);
    console.log("res= ", res);
    setLinkedProducts(res.data.linked_products);
    setMedia(res.data.product.images);
    console.log("media= ", media);
    return res.data;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: async () => {
      const { product } = await getProduct();
      console.log("product= ", product);
      const sizes = Object.keys(product.quantity).map((key) => ({
        size: key,
        amount: product.quantity[key],
      }));
      return {
        name: product.name,
        brand: product.brand,
        description: product.description,
        price_before: product.price_before,
        price_after: product.price_after,
        sku: product.SKU,
        color: product.color,
        category: product.category,
        subCategory: product.subCategory,
        sizes: sizes,
      };
    },
  });
  const category = watch().category;

  const getCategories = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
  };

  const getSubCategories = useCallback(async () => {
    if (watch().category) {
      const res = await axios.get(
        `/subcategory/main_category/${watch().category}`
      );
      setSubCategories(res.data.response);
    }
  }, []);

  React.useEffect(() => {
    getCategories();
  }, []);

  React.useEffect(() => {
    getSubCategories();
  }, [category, getSubCategories]);

  const onChangeFiles = async (event) => {
    const files = event.target.files;
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

  const handleClose = () => {
    setShowModal(false);
  };

  const getLinkedProducts = () => {
    return linkedProducts.map((product) => product._id);
  };

  const formatQuantity = (sizes) => {
    let quantities = {};
    sizes.forEach((size) => {
      quantities = { ...quantities, [size.size]: size.amount };
    });
    return quantities;
  };

  const onSubmit = async (values) => {
    console.log(values);
    setIsSubmitting(true);
    const linked_products = getLinkedProducts();
    const data = {
      ...values,
      images: media,
      dressing: false,
      linked_products: linked_products,
      quantity: formatQuantity(values.sizes),
      desc: {
        type: "cotton",
      },
      SKU: values.sku,
      color_hex: values.color_hex.substring(1),
      price_after: values.price_after
        ? values.price_after
        : values.price_before,
    };

    try {
      await axios.put(`/product/${id}`, data);
      toast.success("Product updated Successfully !");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Modal show={showModal} handleClose={handleClose}>
        <ProductModalContent
          handleClose={handleClose}
          linkedProducts={linkedProducts}
          setLinkedProducts={setLinkedProducts}
        />
      </Modal>
      <form className={styles["add-product"]} onSubmit={handleSubmit(onSubmit)}>
        <ProductHeader
          header="edit product"
          buttonLabel="save product"
          isSubmitting={isSubmitting}
        />
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
                required={true}
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
                label="color name"
                name="color"
                type="text"
                errors={errors}
              />
              <FormControl
                register={register}
                label="color hexadecimal"
                name="color_hex"
                type="color"
                errors={errors}
              />
            </FormBox>
            <FormBox title="sizes">
              <Sizes register={register} errors={errors} control={control} />
            </FormBox>
            <FormBox title="linked products">
              <div className={styles["linked-products"]}>
                {!!linkedProducts?.length && (
                  <ul>
                    {linkedProducts.map((linkedProduct) => {
                      return (
                        <li key={linkedProduct._id}>
                          <img
                            src={linkedProduct?.images[0]?.secure_url}
                            alt={linkedProduct?.images[0]?.public_id}
                          />
                        </li>
                      );
                    })}
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
                register={register}
                label="main category"
                name="category"
                type="select"
                list={categories}
              />
              <FormControl
                register={register}
                label="sub category"
                name="subCategory"
                type="select"
                list={subCategories}
              />
            </FormBox>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
