import styles from "./input.module.scss";

const Input = (props) => {
  const { label, type, name, register } = props;
  return (
    <label className={styles.input}>
      <span>{label}</span>
      <input
        type={type}
        {...register(name, { valueAsNumber: type === "number" })}
      />
    </label>
  );
};

export default Input;
