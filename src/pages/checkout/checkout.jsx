import { Container } from "@mui/material";
import React from "react";
import { Content } from "../../components/checkout/content";
import "./checkout.scss";
export const Checkout = () => {
  return (
    <Container maxWidth="lg" className="intro">
        <div className="checkout_header">
            Thanh toán
        </div>
        <Content/>
    </Container>
  );
};
