import styles from "./formControl.module.scss";

const FormControl = (props) => {
  const { register, name, label, type, errors } = props;

  return (
    <div className={styles["form-box"]}>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} name={name} type={type} />
      {errors[name] && <span className="error">{errors[name]?.message}</span>}
    </div>
  );
};

export default FormControl;
