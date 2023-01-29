import React from "react";
import home from "../../../assets/admin/img/home.svg";
import banner from "../../../assets/admin/img/banner.svg";
import category from "../../../assets/admin/img/category.svg";
import bell from "../../../assets/admin/img/icon-bell.svg";
import product from "../../../assets/admin/img/product.svg";
import voucher from "../../../assets/admin/img/home.svg";
import order from "../../../assets/admin/img/order.png";
import user from "../../../assets/admin/img/user.png";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();

  const data = [
    {
      name: "Tổng quan",
      img: home,
    },
    {
      name: "Danh mục",
      img: category,
    },
    {
      name: "Sản phẩm",
      img: product,
    },
    {
      name: "Đơn thuê",
      img: order,
    },
    {
      name: "Quản lý tài khoản",
      img: user,
    },
    {
      name: "Banner",
      img: banner,
    },
    {
      name: "Mã giảm giá",
      img: voucher,
    },
    {
      name: "Thông báo",
      img: bell,
    },
  ];

  const moveToHome = () => {
    navigate("/");
  };

  const moveToItem = (item) => {
    switch (item.name) {
      case "Tổng quan":
        navigate("/admin");
        break;
      case "Đơn thuê":
        navigate("/order-management");
        break;
      case "Sản phẩm":
        navigate("/product-management");
        break;
      case "Quản lý tài khoản":
        navigate("/user-management");
        break;
      case "Danh mục":
        navigate("/genre-management");
        break;
      default:
      // code block
    }
  };
  return (
    <div className="sidebar__container ">
      <div className="sidebar__logo">
        {/* <img src={logo} alt="" /> */}
        <p onClick={moveToHome}>
          M<span>I</span>OTO
        </p>
      </div>
      <div className="ReactCollapse--collapse">
        <div className="ReactCollapse--content">
          {data.map((item, index) => (
            <div
              className="dropdownmenu"
              key={index}
              onClick={(e) => moveToItem(item)}
            >
              <img src={item.img} alt="" />
              <div className="name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
