import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./content.scss";
import { InfoRetal } from "./infoRetal";
import { InfoUser } from "./infoUser";
export const Content = () => {
  return (
    <Container maxWidth="lg" className="checkout_content">
      <Grid container spacing={2}>
        <Grid item md={7} sm={12} xs={12}><InfoRetal/></Grid>
        <Grid item md={5} sm={12} xs={12}><InfoUser/></Grid>
      </Grid>
    </Container>
  );
};
