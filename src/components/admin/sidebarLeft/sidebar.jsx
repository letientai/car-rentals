import React from "react";
import home from "../../../assets/admin/img/home.svg";
import banner from "../../../assets/admin/img/banner.svg";
import category from "../../../assets/admin/img/category.svg";
import bell from "../../../assets/admin/img/icon-bell.svg";
import product from "../../../assets/admin/img/product.svg";
import voucher from "../../../assets/admin/img/home.svg";
import order from "../../../assets/admin/img/order.png";
export const Sidebar = () => {
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
      name: "Đơn hàng",
      img: order,
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
  return (
    <div className="sidebar__container ">
      <div className="sidebar__logo">
        {/* <img src={logo} alt="" /> */}
        <p>M<span>I</span>OTO</p>
      </div>
      <div className="ReactCollapse--collapse">
        <div className="ReactCollapse--content">
          {data.map((item, index) => (
            <div
              className="dropdownmenu"
              key={index}
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
