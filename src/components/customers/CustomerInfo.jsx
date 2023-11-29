import { BsCart, BsEnvelope, BsLock } from "react-icons/bs";
import Image from "../../assets/Img.png";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";

const CustomerInfo = (props) => {
  const { lastOrder } = props;
  const [customer, setCustomer] = React.useState();
  const params = useParams();
  const { id } = params;

  const fetchCustomer = async (id) => {
    const res = await axios.get(`/user/${id}`);
    setCustomer(res.data);
  };

  React.useEffect(() => {
    fetchCustomer(id);
  }, []);

  const composeAddress = () => {
    if (customer?.addresses?.length) {
      const { city, area, address } = customer.addresses[0];
      return `${city}, ${area}, ${address}`;
    } else {
      return "address";
    }
  };

  return (
    <div className="user-details d-flex flex-column">
      <div className="back"></div>
      <div className="info d-flex flex-column align-items-center">
        <img
          src={Image}
          width={164}
          height={164}
          style={{ borderRadius: "50%" }}
        />
        <p>John Bushmill</p>
        <span>@John</span>
      </div>
      <div className="detail d-flex flex-column ">
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsLock />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>User ID</p>
            <span>{customer?._id}</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsEnvelope />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>Billing Email</p>
            <span>{customer?.email}</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BiPhoneCall />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>Phone Number</p>
            <span>{customer?.telephone}</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <CiLocationOn />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>Delivery Address</p>
            <span>{composeAddress()}</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsCart />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>Last Order</p>
            <span>{new Date(lastOrder).toDateString()}</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsLock />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>Last Online</p>
            <span>1 Day Ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
