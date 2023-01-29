import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./content.scss";
import { InfoRetal } from "./infoRetal";
import { InfoUser } from "./infoUser";
export const Content = () => {
  const [infoValidate, setInfoValidate] = useState();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const url = process.env.REACT_APP_URL_LOCAL;
  const AuthStr = "bearer ".concat(currentUser.accessToken);
  //Fetch info validate user
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const { data } = await axios.get(`${url}user/${currentUser._id}`, {
          headers: { token: AuthStr },
        });
        setInfoValidate(data.authenInfo);
      } catch (error) {}
    };
    fetchInfo();
  }, []);
  return (
    <Container maxWidth="lg" className="checkout_content">
      <Grid container spacing={2}>
        <Grid item md={7} sm={12} xs={12}>
          <InfoRetal />
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <InfoUser infoValidate={infoValidate} />
        </Grid>
      </Grid>
    </Container>
  );
};
