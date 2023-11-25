import styles from "./formControl.module.scss";

const FormControl = (props) => {
  const { register, name, label, type, errors, required } = props;

  let input = <></>;
  if (type === "textarea") {
    input = (
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="5"
        {...register(name, { required: required })}
      ></textarea>
    );
  } else if (type === "select") {
    input = (
      <select {...register(name, { required: required })}>
        <option value="">-- Select an option --</option>
        {props.list?.map((item, idx) => (
          <option key={idx} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    );
  } else if (type === "file") {
    input = (
      <div className={styles["file-box"]}>
        {props.media?.length ? (
          <div className={styles.media}>
            {props.media.map((item, idx) => (
              <div key={idx}>
                <img key={idx} src={item.secure_url} alt={item.public_id} />
              </div>
            ))}
          </div>
        ) : (
          <p>Drag and drop image here, or click choose file</p>
        )}

        <input type="file" name={name} id={name} {...props} />
      </div>
    );
  } else {
    input = (
      <input
        {...register(name, { required: required })}
        name={name}
        type={type}
      />
    );
  }

  return (
    <div className={styles["form-box"]}>
      <label htmlFor={name}>{label}</label>
      {input}
      {errors?.[name] && <span className="error">{errors[name]?.message}</span>}
    </div>
  );
};

export default FormControl;
