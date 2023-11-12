import React from "react";
import NewTodoForm from "./NewTodoForm/NewTodoForm";

import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const TotalAmount = ({ control }) => {
  const cartValues = useWatch({
    control,
    name: "cart",
  });

  console.log(cartValues);

  return null;
};

const Test = () => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      cart: [{ name: "", amount: 0 }],
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "Please append at least 1 item",
      validate: () => {},
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
      })}
    >
      <p>form here</p>
      {fields.map((field, index) => {
        return (
          <section key={field.id}>
            <label>
              <span>Name</span>
              <input {...register(`cart.${index}.name`, { required: true })} />
            </label>
            <label>
              <span>Amount</span>
              <input
                type="number"
                {...register(`cart.${index}.amount`, { valueAsNumber: true })}
              />
            </label>
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </section>
        );
      })}
      <button
        type="button"
        onClick={() => {
          append({
            name: "bill",
            amount: 2,
          });
        }}
      >
        Append
      </button>
      <button
        type="button"
        onClick={() => {
          prepend({
            name: "mostafa",
            amount: 0,
          });
        }}
      >
        Prepend
      </button>
      <TotalAmount control={control} />
      <p>{errors.cart?.root?.message}</p>
      <button type="submit">submit</button>
    </form>
  );
};

export default Test;
