import styles from "./button.module.scss";

const Button = (props) => {
  const getClassName = () => {
    const classNames = [styles.btn];
    if (props.type === "primary") {
      classNames.push(styles.primary);
    } else if (props.type === "secondary") {
      classNames.push(styles.secondary);
    }
    return classNames.join(" ");
  };

  return (
    <button {...props} className={getClassName()}>
      {props.children}
    </button>
  );
};

export default Button;
