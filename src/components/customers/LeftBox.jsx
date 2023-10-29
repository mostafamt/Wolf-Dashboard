import { BsCart, BsEnvelope, BsLock } from "react-icons/bs";
import Image from "../../assets/Img.png";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
function LeftBox() {
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
            <span>ID-011221</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsEnvelope />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>User ID</p>
            <span>ID-011221</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BiPhoneCall />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>User ID</p>
            <span>ID-011221</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <CiLocationOn />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>User ID</p>
            <span>ID-011221</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsCart />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>User ID</p>
            <span>ID-011221</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <span>
              <BsLock />
            </span>
          </div>
          <div className="icon-info d-flex flex-column ">
            <p>User ID</p>
            <span>ID-011221</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftBox;
