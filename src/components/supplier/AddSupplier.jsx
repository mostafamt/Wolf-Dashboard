import { BsChevronRight } from "react-icons/bs";
import ImgIcon from "../../assets/image.png";
import { useContext, useState } from "react";
import { SupplierContext } from "../Supplier";
function AddSupplier() {
  const { addPage, setAddPage } = useContext(SupplierContext);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  return (
    <div>
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h2>Supplier</h2>
          <div className="path">
            <span>Supplier</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Supplier List</span>
            <span>
              <BsChevronRight />
            </span>
            <span>Supplier Details</span>
          </div>
        </div>
        <div>
          <button className="cel me-3" onClick={() => setAddPage(false)}>
            x cancel
          </button>
          <button>+ Add Supplier</button>
        </div>
      </div>
      <div className="add-sub d-flex ">
        <div className="media">
          <h2>Profile Photo </h2>
          <p>Photo</p>
          <div className="d-flex flex-column align-items-center">
            <div className="img">
              <img src={ImgIcon} />
            </div>
            {/* <div className="image">
              <img src={Image}/>
              <span><BsCheckLg/></span>
            </div> */}
            <p>Drag and drop image here, or click add image</p>
            <button>Add Image</button>
          </div>
        </div>
        <div className="add-cat flex-grow-1">
          <h2>Supplier Information</h2>
          <div className="d-flex">
            <div className="me-3 flex-grow-1">
              <p>Frist Name</p>
              <input
                name="first"
                value={firstName}
                placeholder="Type first name here. . ."
                onChange={(e) => setFirstName(e.target.value)}
                style={{ textAlign: "left" }}
              />
            </div>
            <div className="flex-grow-1">
              <p>Last Name</p>
              <input
                name="last"
                value={lastName}
                placeholder="Type last name here. . ."
                onChange={(e) => setLastName(e.target.value)}
                style={{ textAlign: "left" }}
              />
            </div>
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="first"
              value={email}
              placeholder="Type email here. . ."
              onChange={(e) => setEmail(e.target.value)}
              style={{ textAlign: "left" }}
            />
          </div>
          <div className="d-flex">
            <div className="me-3 flex-grow-1">
              <p>Password</p>
              <input
                type="password"
                name="first"
                value={password}
                placeholder="Type password name here. . ."
                onChange={(e) => setPassword(e.target.value)}
                style={{ textAlign: "left" }}
              />
            </div>
            <div className="flex-grow-1">
              <p>Confirm Password</p>
              <input
                type="password"
                name="last"
                value={confirm}
                placeholder="Confirm Password name here. . ."
                onChange={(e) => setConfirm(e.target.value)}
                style={{ textAlign: "left" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddSupplier;
