import React from "react";
import CloseIcon from "@icons/CloseIcon";
import PlusIcon from "@icons/PlusIcon";
import Button from "@components/Button/Button";
import { v4 as uuidv4 } from "uuid";

import styles from "./sizes.module.scss";
import { useFieldArray } from "react-hook-form";

const sizeLabels = [
  { _id: uuidv4(), name: "OS" },
  { _id: uuidv4(), name: "XS" },
  { _id: uuidv4(), name: "S" },
  { _id: uuidv4(), name: "M" },
  { _id: uuidv4(), name: "L" },
  { _id: uuidv4(), name: "XL" },
  { _id: uuidv4(), name: "XXL" },
  { _id: uuidv4(), name: "XXXL" },
];

const Sizes = (props) => {
  const { register, errors, control } = props;

  const { fields, append, remove } = useFieldArray({
    name: "sizes",
    control,
  });

  return (
    <div className={styles.sizes}>
      {fields.map((field, index) => (
        <section className={styles.size} key={field.id}>
          <label>
            <span>Size</span>
            <input type="text" {...register(`sizes.${index}.size`)} />
            {/* <select {...register(`sizes.${index}.size`)}>
              <option value="">-- Select an option --</option>
              {sizeLabels?.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select> */}
          </label>
          <label>
            <span>Quantity</span>
            <input
              {...register(`sizes.${index}.amount`, { valueAsNumber: true })}
              type="number"
            />
          </label>

          <button type="button" onClick={() => remove(index)}>
            <CloseIcon />
          </button>
        </section>
      ))}
      <Button
        variant="invert"
        type="button"
        onClick={() =>
          append({
            size: "S",
            amount: 0,
          })
        }
      >
        <PlusIcon />
        <span>add size</span>
      </Button>
    </div>
  );
};

export default Sizes;
