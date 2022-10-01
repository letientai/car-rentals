import React, { useState } from "react";
import "./layout.scss";
import icBidu from "../../../assets/admin/img/ic-bidu-text.png";
import lnactive from "../../../assets/admin/img/narbar/lnactive.png";
import Arowlnactive from "../../../assets/admin/img/narbar/Arrow_Inactivedown.png";
import home from "../../../assets/admin/img/narbar/home.svg";
import banner from "../../../assets/admin/img/narbar/banner.svg";
import category from "../../../assets/admin/img/narbar/category.svg";
import bell from "../../../assets/admin/img/narbar/icon-bell.svg";
import live from "../../../assets/admin/img/narbar/live-streaming.svg";
import product from "../../../assets/admin/img/narbar/product.svg";
import shop from "../../../assets/admin/img/narbar/shop.svg";
import voucher from "../../../assets/admin/img/narbar/home.svg";
import order from "../../../assets/admin/img/narbar/order.png";
import registration from "../../../assets/admin/img/narbar/icon_registration.svg";
import { removeVietnameseTones } from "../../layout/navbar/search/removeVNtones";
import { useNavigate } from "react-router-dom";

export const NavbarAdmin = () => {
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();

  const data = [
    {
      name: "Tổng quan",
      img: home,
    },
    {
      name: "Đăng ký bán hàng",
      img: registration,
    },
    {
      name: "Shop",
      img: shop,
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
      name: "Streaming",
      img: live,
    },
    {
      name: "Thông báo",
      img: bell,
    },
  ];

  const hideCommerce = () => {
    setCheck(!check);
  };
  const moveToItem = (item) =>{
    console.log(item);
    const address = removeVietnameseTones(item.name)
    navigate(`/${address}`)
  }
  return (
    <div className="navbarAdmin">
      <div className="scroll-wrapper">
        <div>
          <div className="sidenav-header">
            <div className="nav-logo-pito">
              <a href="/bidu-ecommerce">
                <img src={icBidu} width="70" />
              </a>
            </div>
          </div>
          <div className="navbar-inner">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <div>
                  <div className="CMS Commerce" onClick={hideCommerce}>
                    <div className="fo-we-bo">CMS Commerce</div>
                    <div className="image">
                      <img src={!check ? lnactive : Arowlnactive} alt="" />
                    </div>
                  </div>
                  {check && (
                    <div className="ReactCollapse--collapse">
                      <div className="ReactCollapse--content">
                        {data.map((item, index) => (
                          <div className="dropdownmenu" key={index} onClick={(e) => moveToItem(item)}>
                            <img src={item.img} alt="" />
                            <div className="name">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
