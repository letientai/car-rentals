import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@mui/material";
import { useState } from "react";
const axios = require("axios").default;

export default function AlertDialog({
  openDialog,
  dataProduct,
  checkAddProduct,
  id,
}) {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  React.useEffect(() => {
    setOpen(true);
  }, [openDialog]);
  React.useEffect(() => {
    setOpen(false);
  }, []);
  const handleAddProduct = () => {
    console.log(dataProduct?.image);
    axios
      .post("http://api-rental-carl.herokuapp.com/car/create", {
        genre: dataProduct.genre,
        name: dataProduct.productName,
        unitPrice: parseInt(dataProduct.unitPrice),
        insuranceFees: parseInt(dataProduct.insuranceFees),
        images: dataProduct?.image || "",
        available: true,
        description: dataProduct.description,
        seats: dataProduct.seats,
        fuel: dataProduct.fuel,
      })
      .then(function (response) {
        console.log(response);
        setOpen(false);
        setOpenAlert(true);
        setMessage("Thêm sản phẩm thành công!");
        setSeverity("success");
      })
      .catch(function (error) {
        console.log(error);
        setOpenAlert(true);
        setOpen(false);
        setMessage("Thêm sản phẩm thất bại!");
        setSeverity("warning");
      });
    const timer = setTimeout(() => {
      setOpenAlert(false);
    }, 4000);
    return () => clearTimeout(timer);
  };

  const handleUpdateProduct = () => {
    console.log(dataProduct);
    axios
      .patch(`http://api-rental-carl.herokuapp.com/car/${id}/edit`, {
        genre: dataProduct.genre,
        name: dataProduct.productName,
        unitPrice: parseInt(dataProduct.unitPrice),
        insuranceFees: parseInt(dataProduct.insuranceFees),
        // images: dataProduct?.image || "",
        available: true,
        description: dataProduct.description,
        seats: dataProduct.seats,
        fuel: dataProduct.fuel,
        // slug: dataProduct.productName,
      })
      .then(function (response) {
        console.log(response);
        setOpen(false);
        setOpenAlert(true);
        setMessage("Cập nhật sản phẩm thành công!");
        setSeverity("success");
      })
      .catch(function (error) {
        console.log(error);
        setOpenAlert(true);
        setMessage("Cập nhật sản phẩm thất bại!");
        setSeverity("warning");
        setOpenAlert(false);
      });
    const timer = setTimeout(() => {
      setOpenAlert(false);
    }, 4000);
    return () => clearTimeout(timer);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {openAlert && (
        <Alert severity={severity} className="alert-request">
          {message}
        </Alert>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {checkAddProduct ? "THÊM SẢN PHẨM" : "CẬP NHẬT SẢN PHẨM"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn chắc chắn muốn {checkAddProduct ? "thêm" : "cập nhật"} sản phẩm?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button
            onClick={checkAddProduct ? handleAddProduct : handleUpdateProduct}
            autoFocus
          >
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
