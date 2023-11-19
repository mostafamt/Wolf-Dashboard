import axios from "../../axios";
import React from "react";
import Banner from "../Banner/Banner";

import styles from "./banners.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Banners = (props) => {
  const { category } = props;
  const [banners, setBanners] = React.useState([]);
  const navigate = useNavigate();

  const fetchBannersByCategory = async (category) => {
    if (category) {
      const res = await axios.get(`/banner?categoryId=${category._id}`);
      setBanners(res.data);
    } else {
      setBanners([]);
    }
  };

  React.useEffect(() => {
    fetchBannersByCategory(category);
  }, [category]);

  const onEditBanner = async (bannerId) => {
    navigate(`/banners/${bannerId}`);
  };

  const onDeleteBanner = async (bannerId) => {
    await axios.delete(`/banner?id=${bannerId}`);
    toast.success("Banner deleted successfully!");
    await fetchBannersByCategory(category);
  };

  return (
    <div className={styles.banners}>
      {banners.length ? (
        banners.map((banner) => (
          <Banner
            key={banner._id}
            banner={banner}
            editBanner={onEditBanner}
            deleteBanner={onDeleteBanner}
            fetchBanner={() => fetchBannersByCategory(category)}
          />
        ))
      ) : (
        <div className={styles["no-banners"]}>
          <p>No Banners yet!</p>
        </div>
      )}
    </div>
  );
};

export default Banners;
