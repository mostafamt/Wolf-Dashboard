import React from "react";
import FormBox from "@components/FormBox/FormBox";
import Button from "@components/Button/Button";
import Select from "@components/Select/Select";
import { useForm } from "react-hook-form";
import axios from "../../../axios";

import styles from "./filterByCategory.module.scss";

const FilterByCategory = (props) => {
  const { title, setProducts, onClickCancelFilter } = props;
  const [categories, setCategories] = React.useState([]);
  const [subCategories, setSubCategories] = React.useState([]);
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const category = watch().category;

  const getCategories = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
  };

  const getSubCategories = React.useCallback(async () => {
    if (watch().category) {
      console.log(watch().category);
      const res = await axios.get(
        `/subcategory/main_category/${watch().category}`
      );
      console.log(res.data.response);
      setSubCategories(res.data.response);
    }
  }, [watch]);

  React.useEffect(() => {
    getCategories();
  }, []);

  React.useEffect(() => {
    getSubCategories();
  }, [category, getSubCategories]);

  const onSubmit = async (values) => {
    console.log(values);
    const { category, subCategory } = values;
    // ?category=${category}&subCategory=${subCategory}
    const res = await axios.get(
      `product/filter?category=${category}&subCategory=${subCategory}`
    );
    setProducts(res.data);
    console.log(res.data);
  };

  return (
    <form
      className={styles["filter-by-category"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormBox title={title} col={2}>
        <label>
          <span>Category</span>
          <Select
            label="Category"
            type="date"
            name="category"
            register={register}
            required={true}
            errors={errors}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
        </label>
        <label>
          <span>Sub Category</span>
          <Select
            label="Sub Category"
            type="date"
            name="subCategory"
            register={register}
            required={true}
            errors={errors}
          >
            {subCategories.map((subCategory) => (
              <option key={subCategory._id} value={subCategory._id}>
                {subCategory.name}
              </option>
            ))}
          </Select>
        </label>
      </FormBox>
      <div className={styles.actions}>
        <Button variant="secondary" type="button" onClick={onClickCancelFilter}>
          Cancel
        </Button>
        <Button variant="primary">Submit</Button>
      </div>
    </form>
  );
};

export default FilterByCategory;
