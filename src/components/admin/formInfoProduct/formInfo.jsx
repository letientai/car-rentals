import { Formik, FastField, Form } from "formik";
import Select from "react-select";
import Formm from "react-bootstrap/Form";
// import Control from 'react-bootstrap/Control';
import React, { useState } from "react";
import "./formInfo.scss";
import { ImageUpload } from "../imageUpload/imageUpload";
export const FormInfo = () => {
  const [optionGender, setOptionGender] = useState("");
  const [optionAvailable, setOptionAvailable] = useState("");
  const [description, setDescription] = useState("");

  const onChangDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeGender = (selectedOption) => {
    setOptionGender(selectedOption.value);
  };
  const handleChangeAvailable = (selectedOption) => {
    setOptionAvailable(selectedOption.value);
  };

  const initialValues = {
    productName: "",
    gender: "",
    unitPrice: "",
    insuranceFees: "",
    // image: "",
    available: "",
    description: "",
    seats: "",
    fuel: "",
  };

  const optionsGender = [
    { value: "Toyota", label: "Toyota" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "BMW", label: "BMW" },
    { value: "Rolls-Royce", label: "Rolls-Royce" },
    { value: "Ferrari", label: "Ferrari" },
    { value: "Porsche", label: "Porsche" },
    { value: "VinFast", label: "VinFast" },
    { value: "Bentley", label: "Bentley" },
    { value: "Audi", label: "Audi" },
    { value: "Honda", label: "Honda" },
    { value: "Suzuki", label: "Suzuki" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Isuzu", label: "Isuzu" },
    { value: "Mazda", label: "Mazda" },
  ];

  const optionsAvailable = [
    { value: 1, label: "Còn trống" },
    { value: 2, label: "Đang thuê" },
    { value: 3, label: "Đã đặt" },
  ];

  const onAdd = async (values, { resetForm }) => {
    values.gender = optionGender;
    values.available = optionAvailable;
    values.description = description;
    initialValues.gender = optionGender;
    initialValues.available = optionAvailable;
    initialValues.description = description;
    console.log("submit", values);
  };



  return (
    <div>
      <div className="form_herder">
        <p>Sản phẩm</p>
      </div>
      <Formik
        initialValues={initialValues}
        // validationSchema={LoginSchema}
        onSubmit={onAdd}
      >
        {({ errors, touched }) => (
          <Form className="form_fields">
            <div className="row1 d-flex ">
              <div className="field">
                <div className="field__titel">Tên sản phẩm</div>
                <div className="field__content">
                  <FastField name="productName" className="input" type="text" />
                  {/* {errors.username && touched.username ? (
                <div className="formError">{errors.username}</div>
              ) : null} */}
                </div>
              </div>
              <div className="field">
                <div className="field__titel">Hãng</div>
                <div className="field__content">
                  <Select
                    name="gender"
                    className="select"
                    options={optionsGender}
                    placeholder=""
                    onChange={handleChangeGender}
                  />
                  {/* {errors.password && touched.password ? (
                <div className="formError">{errors.password}</div>
              ) : null} */}
                </div>
              </div>
            </div>
            <div className="row1 d-flex ">
              <div className="field">
                <div className="field__titel">Đơn giá</div>
                <div className="field__content">
                  <FastField name="unitPrice" className="input" type="text" />
                  {/* {errors.username && touched.username ? (
                <div className="formError">{errors.username}</div>
              ) : null} */}
                </div>
              </div>
              <div className="field">
                <div className="field__titel">Trạng thái</div>
                <div className="field__content">
                  <Select
                    name="available"
                    className="select"
                    options={optionsAvailable}
                    placeholder=""
                    onChange={handleChangeAvailable}
                  />
                  {/* {errors.username && touched.username ? (
                <div className="formError">{errors.username}</div>
              ) : null} */}
                </div>
              </div>
            </div>
            <div className="row1 d-flex ">
              <div className="field">
                <div className="field__titel">Số ghế</div>
                <div className="field__content">
                  <FastField name="seats" className="input" type="number" />
                  {/* {errors.password && touched.password ? (
                <div className="formError">{errors.password}</div>
              ) : null} */}
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
                  {/* {errors.password && touched.password ? (
                <div className="formError">{errors.password}</div>
              ) : null} */}
                </div>
              </div>
            </div>
            <div className="row1 d-flex ">
              <div className="fields">
                <div className="field">
                  <div className="field__titel">Nhiên liệu</div>
                  <div className="field__content">
                    <FastField name="fuel" className="input" type="text" />
                    {/* {errors.username && touched.username ? (
                <div className="formError">{errors.username}</div>
              ) : null} */}
                  </div>
                </div>
                <div className="desciption">
                  <div className="field__titel">Mô tả</div>
                  <div className="field__content">
                    <Formm.Control
                      as="textarea"
                      rows={11}
                      name="description"
                      value={description}
                      onChange={(e) => onChangDescription(e)}
                    />
                    {/* {errors.username && touched.username ? (
                <div className="formError">{errors.username}</div>
              ) : null} */}
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="field__titel">Ảnh</div>
                <div className="field__content">
                  <ImageUpload />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
