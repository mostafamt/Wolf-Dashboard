import React from "react";
import TitleOne from "../../components/banner/Titleone";
import axios from "../../axios";
import { default as BannerBoxes } from "../../components/Banners/Banners";

const Banners = () => {
  const [activeCategory, setActiveCategory] = React.useState();
  const [categories, setCategories] = React.useState([]);

  const fetchCategories = async () => {
    const res = await axios.get("/main_category");
    setCategories(res.data.response);
    setActiveCategory(res.data.response?.[0]);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="banner">
      <TitleOne />
      <div className="select-list d-flex ">
        {categories.length ? (
          <ul>
            {categories.map((category) => (
              <li
                key={category._id}
                className={`${activeCategory === category && "active"}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <BannerBoxes category={activeCategory} />
    </div>
  );
};

export default Banners;
