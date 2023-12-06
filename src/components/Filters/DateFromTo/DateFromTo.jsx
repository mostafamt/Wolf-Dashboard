import FormBox from "@components/FormBox/FormBox";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./dateFromTo.module.scss";
import axios from "../../../axios";

const DateFromTo = (props) => {
  const { title, field, setProducts, onClickCancelFilter } = props;
  const dateFromToSchema = z.object({
    from: z.coerce.date().max(new Date(Date.now()), {
      message: "From must be less than or equal to Today",
    }),
    to: z.coerce.date().max(new Date(Date.now()), {
      message: "To must be less than or equal to Today",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(dateFromToSchema),
  });

  const onSubmit = async (values) => {
    if (values.from > values.to) {
      return;
    }
    const { from, to } = values;
    const res = await axios.get(
      `/product/filterByDate/${field}?from=${from}&&to=${to}`
    );
    setProducts(res.data);
    console.log(res.data);
  };

  return (
    <form className={styles["date-from-to"]} onSubmit={handleSubmit(onSubmit)}>
      <FormBox title={title} col={2}>
        <Input
          label="From"
          type="date"
          name="from"
          register={register}
          required={true}
          errors={errors}
        />
        <Input
          label="to"
          type="date"
          name="to"
          register={register}
          required={true}
          errors={errors}
        />
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

export default DateFromTo;
