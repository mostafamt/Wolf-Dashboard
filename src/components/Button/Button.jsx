import Spinner from "@components/Spinner/Spinner";
import styles from "./button.module.scss";

const Button = (props) => {
  const getClassName = () => {
    const classNames = [styles.btn];
    if (props.variant === "primary") {
      classNames.push(styles.primary);
    } else if (props.variant === "secondary") {
      classNames.push(styles.secondary);
    } else if (props.variant === "invert") {
      classNames.push(styles.invert);
    }
    return classNames.join(" ");
  };
  const { isSubmitting, ...rest } = props;

  return (
    <button className={getClassName()} {...rest} disabled={isSubmitting}>
      {props.children}
      {isSubmitting && <Spinner />}
    </button>
  );
};

export default Button;
