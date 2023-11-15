import React from "react";
import TitleTwo from "@components/customers/TitleTwo";
import LeftBox from "@components/customers/LeftBox";
import RightBox from "@components/customers/RightBox";

const Customer = () => {
  return (
    <div className="customer">
      <TitleTwo />
      <div className="d-flex px-4 ">
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
};

export default Customer;
