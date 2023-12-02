import styles from "./input.module.scss";

const Input = (props) => {
  const { label, type, name, register, required, errors } = props;

  if (!register) {
    return (
      <label className={styles.input}>
        <span>{label}</span>
        <input type={type} />
      </label>
    );
  }

  return (
    <label className={styles.input}>
      <span>{label}</span>
      <div>
        <input
          type={type}
          {...register(name, {
            required: required,
            valueAsNumber: type === "number",
          })}
        />
        {errors && errors[name] && (
          <p>{errors[name].message || errors[name].type}</p>
        )}
      </div>
    </label>
  );
};

export default Input;
