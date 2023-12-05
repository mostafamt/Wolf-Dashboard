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
import { ToastContainer, toast } from "react-toastify";

import styles from "./addProduct.module.scss";

const AddProduct = () => {
  const [categories, setCategories] = React.useState([]);
  const [subCategories, setSubCategories] = React.useState([]);
  const [media, setMedia] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [linkedProducts, setLinkedProducts] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [virtualRoom, setVirtualRoom] = React.useState("false");
  const [gender, setgender] = React.useState("");
  const [selctedCategory, setselctedCategory] = React.useState("");
  

  
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: {
      sizes: [{ size: "OS", amount: 0 }],
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
      console.log(res.data.response);
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
    const linked_products = getLinkedProducts();
    const data = {
      ...values,
      images: media,
      // dressing: false,
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
      dressing:virtualRoom,
    ...(gender && { gender }),
  ...(selctedCategory && { vrpos: selctedCategory }),
  ...(selctedCategory === "bottoms" && { vrpossec: "pants" }),
    };
    console.log("data= ", data);
    setIsSubmitting(true);
    try {
      if(virtualRoom==="true"){
        if (!gender || !selctedCategory) {
           toast.error("Please choose gender and selected category");
           return;
        }
      }
      const response=await axios.post("/product/create", data);
      const productId = response?.data?._id;
      const firstImage = response.data?.images[0]?.secure_url;
      // toast.success("Product created Successfully !");
      // console.log(productId,firstImage)
      // console.log(response,"responseresponseresponse")
          // Second POST request
          const vrRequestData = {
            vrprop: {
              vrpos: selctedCategory,
              vrpossec: selctedCategory === "bottoms" ? "pants" : undefined,
              gender: gender,
            },
            image: firstImage,
            productId: productId,
          };

          if(virtualRoom==="true"){
            await axios.post("product/createRequestVr", vrRequestData);
          }
          //   toast.success("Product created Successfully !");
            // setTimeout(() => {
            //   navigate("/products");
            // }, 2000);

      toast.success("Product created Successfully !");
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
      <ToastContainer />
      <Modal show={showModal} handleClose={handleClose}>
        <ProductModalContent
          handleClose={handleClose}
          linkedProducts={linkedProducts}
          setLinkedProducts={setLinkedProducts}
        />
      </Modal>
      <form className={styles["add-product"]} onSubmit={handleSubmit(onSubmit)}>
        {/* {console.log(virtualRoom,gender,selctedCategory)} */}
        <ProductHeader
          header="add product"
          buttonLabel="add product"
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
            <FormBox title="Dressing">
              {/* <FormControl
                register={register}
                label="virtual room"
                name="virtualRoom"
                type="select"
                list={[{ name: 'Yes', value: true }, { name: 'No', value: false }]}
                onChange={(e) => setVirtualRoom(e.target.value)}
              /> */}
              <div style={{lineHeight:"30px"}}>
              <label htmlFor="virtual">virtual Room</label>
                <select   onChange={(e) => {
                      setVirtualRoom(e.target.value);
                      if (e.target.value === "false") {
                        setselctedCategory("");
                        setgender("");
                      }
                    }}
                  id="virtual" className="form-select " aria-label="Default select example">
                  <option selected>-- Select an option --</option>
                  <option value="true">yes</option>
                  <option value="false">no</option>
                </select>
              </div>
              {virtualRoom==="true" ?
                <div className="mt-3" >
                <div   style={{lineHeight:"10px"}}>
                <label htmlFor="virtual">Selected Category</label>

                <select onChange={(e)=>setselctedCategory(e.target.value)} className="form-select mt-3" aria-label="Default select example ">
                  <option selected>-- Select an option --</option>
                  <option value="tops">tops</option>
                  <option value="bottoms">bottoms</option>
                </select>
                </div>

               <div className="mt-3"  style={{lineHeight:"10px"}}>
               <label  htmlFor="virtual">Gender</label>
               <select onChange={(e)=>setgender(e.target.value)} className="form-select mt-3 mb-4" aria-label="Default select example">
                  <option selected>-- Select an option --</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
               </div>
               
                </div>:
                null
              }
            
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

export default AddProduct;
