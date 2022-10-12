import { Formik, FastField, Form } from "formik";
import Select from "react-select";
import Formm from "react-bootstrap/Form";
// import Control from 'react-bootstrap/Control';
import React, { useEffect, useState } from "react";
import "./formInfo.scss";
import { ImageUpload } from "../imageUpload/imageUpload";
import { FormInfoSchema } from "./validate";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { prototype } from "apexcharts";
import AlertDialog from "./dialog";
import { Alert } from "@mui/material";
const axios = require("axios").default;

export const FormInfo = ({ checkAddProduct, btnAddProduct }) => {
  const optionsAvailable = [
    { value: true, label: "Còn trống" },
    { value: false, label: "Đang thuê" },
  ];

  const [Availables, setOptionAvailable] = useState(optionsAvailable[0].value);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("product-management/")[1];
  const [dataProduct, setDataProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [optionGenre, setOptionGenre] = useState([]);
  const [chooseGenre, setChooseGenre] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [checkLD, setCheckLD] = useState(0);
  const [defaultGenre, setDefaultGenre] = useState([]);
  // const defaultGenre = [];

  useEffect(() => {
    setLoading(true);
    fetchGenre();
  }, []);

  const fetchGenre = () => {
    axios
      .get(`http://api-rental-carl.herokuapp.com/genre`)
      .then(function (response1) {
        setOptionGenre(response1.data);
        // defaultGenre = optionGenre.filter((x) => x._id === chooseGenre )
        if (!checkAddProduct) {
          //fetchData
          axios
            .get(`http://api-rental-carl.herokuapp.com/car/${id}`)
            .then(function (response2) {
              // handle success
              console.log(response2);
              setDataProduct(response2.data);
              setDescription(response2.data?.description);
              setChooseGenre(response2.data?.genre?._id);
              console.log(response1.data);
              console.log(response2.data?.genre?._id);
              setDefaultGenre(
                response1.data.filter(
                  (x) => x._id === response2.data?.genre?._id
                )
              );
              setLoading(false);
            })
            .catch(function (error) {
              setCheckLD(checkLD + 1);
            });
        } else {
          setLoading(false);
        }
      })
      .catch(function (error) {
        setLoading(false);
      });
  };
  // const fetchData = () => {
  //   axios
  //     .get(`http://api-rental-carl.herokuapp.com/car/${id}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //       setDataProduct(response.data);
  //       setDescription(response.data?.description);
  //       setChooseGenre(response.data?.genre?._id);
  //       console.log(optionGenre);
  //       console.log(response.data?.genre?._id);
  //       setDefaultGenre(
  //         optionGenre.filter((x) => x._id === response.data?.genre?._id)
  //       );
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       setCheckLD(checkLD + 1);
  //     });
  // };
  const onChangDescription = (e) => {
    setDescription(e.target.value);
    initialValues.description = e.target.value;
  };

  const handleChangeGenre = (selectedOption) => {
    setChooseGenre(selectedOption._id);
    // initialValues.genre = selectedOption._id;
    console.log(chooseGenre);
  };
  const handleChangeAvailable = (selectedOption) => {
    setOptionAvailable(selectedOption.value);
  };

  const initialValues = {
    productName: checkAddProduct ? "" : dataProduct?.name,
    genre: checkAddProduct ? "" : dataProduct?.genre?.name,
    unitPrice: checkAddProduct ? "" : dataProduct?.unitPrice,
    insuranceFees: checkAddProduct ? "" : dataProduct?.insuranceFees,
    // image: "",
    available: checkAddProduct ? "" : dataProduct?.available,
    description: checkAddProduct ? "" : dataProduct?.description,
    seats: checkAddProduct ? "" : dataProduct?.seats,
    fuel: checkAddProduct ? "" : dataProduct?.fuel,
  };

  useEffect(() => {
    if (!checkAddProduct) {
    }
  }, []);

  const onAdd = async (values) => {
    values.genre = chooseGenre;
    values.available = Availables;
    values.description = description;
    // initialValues.gender = optionGender;
    // initialValues.available = optionAvailable;
    // initialValues.description = description;
    // console.log("submit", values);
    if (
      values.fuel &&
      values.genre &&
      values.description &&
      values.insuranceFees &&
      values.productName &&
      values.seats &&
      values.unitPrice
    ) {
      setDataProduct(values);
      setOpenDialog(!openDialog);
    } else {
      setOpenAlert(true);
      const timer = setTimeout(() => {
        setOpenAlert(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  };
  const listImg = (list) => {
    setImage(list);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <div>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <div>
          {openAlert && (
            <Alert className="alert-request" severity="info">
              Yêu cầu nhập đầy đủ thông tin ở các trường có dấu (*)
            </Alert>
          )}
          <AlertDialog
            openDialog={openDialog}
            dataProduct={dataProduct}
            checkAddProduct={checkAddProduct}
            id={id}
          />
          <div className="form_herder">
            <p>Sản phẩm</p>
          </div>
          <Formik
            initialValues={initialValues}
            // validationSchema={FormInfoSchema}
            onSubmit={onAdd}
          >
            {({ errors, touched }) => (
              <Form className="form_fields">
                <div className="row1 d-flex ">
                  <div className="field">
                    <div className="field__titel">Tên sản phẩm</div>
                    <div className="field__content">
                      <FastField
                        name="productName"
                        className="input"
                        type="text"
                      />
                      {/* {errors.productName && touched.productName ? (
                        <div className="formError">{errors.productName}</div>
                      ) : null} */}
                      <div className="formError">(*)</div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="field__titel">Hãng</div>
                    <div className="field__content_select">
                      <Select
                        className="select"
                        options={optionGenre}
                        placeholder=""
                        defaultValue={!checkAddProduct && defaultGenre[0]}
                        onChange={handleChangeGenre}
                      />
                      <div className="formError">(*)</div>

                      {/* {errors.genre && touched.genre ? (
                        <div className="formError">{errors.genre}</div>
                      ) : null} */}
                    </div>
                  </div>
                </div>
                <div className="row1 d-flex ">
                  <div className="field">
                    <div className="field__titel">Đơn giá</div>
                    <div className="field__content">
                      <FastField
                        name="unitPrice"
                        className="input"
                        type="text"
                      />
                      <div className="formError">(*)</div>

                      {/* {errors.unitPrice && touched.unitPrice ? (
                        <div className="formError">{errors.unitPrice}</div>
                      ) : null} */}
                    </div>
                  </div>
                  <div className="field">
                    <div className="field__titel">Trạng thái</div>
                    <div className="field__content_select">
                      <Select
                        name="available"
                        className="select"
                        options={optionsAvailable}
                        placeholder=""
                        defaultValue={
                          !checkAddProduct
                            ? Availables
                              ? optionsAvailable[1]
                              : optionsAvailable[0]
                            : optionsAvailable[0]
                        }
                        onChange={handleChangeAvailable}
                      />
                      <div className="formError">(*)</div>

                      {/* {errors.available && touched.available ? (
                        <div className="formError">{errors.available}</div>
                      ) : null} */}
                    </div>
                  </div>
                </div>
                <div className="row1 d-flex ">
                  <div className="field">
                    <div className="field__titel">Số ghế</div>
                    <div className="field__content">
                      <FastField name="seats" className="input" type="number" />
                      {/* {errors.seats && touched.seats ? (
                        <div className="formError">{errors.seats}</div>
                      ) : null} */}
                      <div className="formError">(*)</div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="field__titel">Phí bảo hiểm</div>
                    <div className="field__content">
                      <FastField
                        name="insuranceFees"
                        className="input"
                        type="text"
                      />
                      {/* {errors.insuranceFees && touched.insuranceFees ? (
                        <div className="formError">{errors.insuranceFees}</div>
                      ) : null} */}
                      <div className="formError">(*)</div>
                    </div>
                  </div>
                </div>
                <div className="row1 d-flex ">
                  <div className="field">
                    <div className="field__titel">Nhiên liệu</div>
                    <div className="field__content">
                      <FastField name="fuel" className="input" type="text" />
                      {/* {errors.fuel && touched.fuel ? (
                          <div className="formError">{errors.fuel}</div>
                        ) : null} */}
                      <div className="formError">(*)</div>
                    </div>
                  </div>
                </div>

                <div className="row1 d-flex ">
                  <div className="desciption">
                    <div className="field__titel">Mô tả</div>
                    <div className="field__content">
                      <Formm.Control
                        as="textarea"
                        rows={5}
                        name="description"
                        value={description}
                        onChange={(e) => onChangDescription(e)}
                        className="formControl"
                      />
                      <div className="formError">(*)</div>

                      {/* {errors.description && touched.description ? (
                        <div className="formError">{errors.description}</div>
                      ) : null} */}
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button
                    type="submit"
                    className="btn__update"
                    // onClick={handleClickOpenDialog}
                  >
                    {checkAddProduct ? "Thêm sản phẩm" : "Cập nhật"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <ImageUpload listImg={listImg} />
        </div>
      )}
    </div>
  );
};
