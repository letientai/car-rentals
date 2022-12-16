import Account from "../components/account/Account";
import { LayoutAdmin } from "../components/admin/layout";
import SearchLayout from "../components/CustomLayout/SearchLayout";
import ItemRenderSearch from "../components/Search/ItemRenderSearch";
import { AddProduct } from "../pages/admin/addProduct/addProduct";
import { GenreManagement } from "../pages/admin/genreManagement/genreManagement";
import { OrderManagement } from "../pages/admin/orderManagement/orderManagement";
import { Overview } from "../pages/admin/overview/overview";
import { ProductDetail } from "../pages/admin/productDetail/productDetail";
import { ProductManagement } from "../pages/admin/productmanagement/productManagement";
import { UserDetail } from "../pages/admin/userDetail/userDetail";
import { UserManagement } from "../pages/admin/userManagement/userManagement";
import { Checkout } from "../pages/checkout/checkout";
import Home from "../pages/Home";
import Register from "../pages/Register";

const routes = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  const publicRoutes = [
    { path: "/", component: Home },
    { path: "register", component: Register },

    { path: "admin", component: Overview, Layout: LayoutAdmin ,role : "admin" },
    { path: "user-management", component: UserManagement, Layout: LayoutAdmin },
    {
      path: "order-management",
      component: OrderManagement,
      Layout: LayoutAdmin,
    },
    {
      path: "product-management",
      component: ProductManagement,
      Layout: LayoutAdmin,
    },
    {
      path: "product-management/:id",
      component: ProductDetail,
      Layout: LayoutAdmin,
    },
    {
      path: "add-product",
      component: AddProduct,
      Layout: LayoutAdmin,
    },
    {
      path: "user-management/:id",
      component: UserDetail,
      Layout: LayoutAdmin,
    },
    {
      path: "genre-management",
      component: GenreManagement,
      Layout: LayoutAdmin,
    },
    { path: "search", component: ItemRenderSearch, Layout: SearchLayout },
    { path: "account", component: Account },
    { path: "checkout", component: Checkout },
  ];
  const privateRoutes = [{ path: "/" }];
  return {
    publicRoutes,
    privateRoutes,
  };
};

export default routes;
