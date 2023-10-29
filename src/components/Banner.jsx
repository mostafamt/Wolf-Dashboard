import Image1 from "../assets/Hero.jpg";
import Image2 from "../assets/Frame 41.jpg";
import { createContext, useState } from "react";
import TitleOne from "./banner/Titleone";
import Ad from "./banner/Ad";
import TitleTwo from "./banner/TitleTwo";
import EditBanner from "./banner/EditBanner";
export const BannerContext = createContext();
function Banner() {
  const [edit, setEdit] = useState(false);
  const [bannerId, setBannerId] = useState(0);
  const [active, setActive] = useState("رجال");
  return (
    <div className="banner">
      <BannerContext.Provider value={{ edit, setEdit, bannerId, setBannerId }}>
        {edit ? (
          <>
            <TitleTwo />
            <EditBanner list={list} id={bannerId} />
          </>
        ) : (
          <>
            <TitleOne />
            <div className="select-list d-flex ">
              <ul>
                <li
                  className={`${active == "رجال" && "active"}`}
                  onClick={() => setActive("رجال")}
                >
                  رجال
                </li>
                <li
                  className={`${active == "نساء" && "active"}`}
                  onClick={() => setActive("نساء")}
                >
                  نساء
                </li>
                <li
                  className={`${active == "ألعاب" && "active"}`}
                  onClick={() => setActive("ألعاب")}
                >
                  ألعاب
                </li>
                <li
                  className={`${active == "رياضة" && "active"}`}
                  onClick={() => setActive("رياضة")}
                >
                  رياضة
                </li>
                <li
                  className={`${active == "ركن الجمال" && "active"}`}
                  onClick={() => setActive("ركن الجمال")}
                >
                  ركن الجمال
                </li>
              </ul>
            </div>
            <Ad list={list} />
            <Ad list={list} />
          </>
        )}
      </BannerContext.Provider>
    </div>
  );
}
export default Banner;
const list = [
  { Id: 1, image: Image1 },
  { Id: 2, image: Image2 },
  { Id: 3, image: Image1 },
  { Id: 4, image: Image2 },
];
