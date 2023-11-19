import styles from "./select.module.scss";

const Select = (props) => {
  const { children, register, name, required } = props;

  return (
    <select
      className={styles.select}
      {...register(name, { required: required })}
    >
      <option value="">--Select an option--</option>
      {children}
    </select>
  );
};

export default Select;
