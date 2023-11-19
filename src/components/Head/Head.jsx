import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Button from "@components/Button/Button";
import SaveIcon from "@icons/SaveIcon";
import CloseIcon from "@icons/CloseIcon";
import styles from "./head.module.scss";
import { useNavigate } from "react-router-dom";

const Head = (props) => {
  const { title, list } = props;
  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate("/");
  };

  return (
    <div
      className={`title d-flex justify-content-between align-items-center  ${styles.head}`}
    >
      <div>
        <h2>{title}</h2>
        <div className="path">
          {list.map((item, idx) => {
            if (idx === list.length - 1) {
              return <span key={idx}>{item}</span>;
            } else {
              return (
                <React.Fragment key={idx}>
                  <span>{item}</span>
                  <span>
                    <BsChevronRight />
                  </span>
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary" type="button" onClick={onClickCancel}>
          <CloseIcon />
          <span>cancel</span>
        </Button>
        <Button type="submit">
          <SaveIcon />
          <span>save</span>
        </Button>
      </div>
    </div>
  );
};

export default Head;
