import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import carRequest from "../../../api/carRequest";
import genreRequest from "../../../api/genreRequest";
import { Alert } from "@mui/material";

export default function AlertDialogDelete(prop) {
  const item = prop.idDelete;
  const checkDialog = prop.checkDialog;
  const title = prop.title;
  const [open, setOpen] = React.useState(false);
  const [checkAlert, setCheckAlert] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (checkDialog) {
      setOpen(true);
    }
  }, [checkDialog]);

  const handleDelete = () => {
    if (title === "rmProduct") {
      carRequest.deleteCar(item._id, dispatch);
    } else if (title === "rmGenre") {
      if (item.cars.length === 0) {
        genreRequest.deleteGenresApi(item._id, dispatch);
      } else {
        setCheckAlert(true);
        const timer = setTimeout(() => {
          setCheckAlert(false);
        }, 3500);
        return () => clearTimeout(timer);
      }
    }
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    prop.closeDelete(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {checkAlert && (
          <Alert className="alertAddGenre" severity="info">
            Không thể xóa hãng: {item.label}
          </Alert>
        )}
        <DialogTitle id="alert-dialog-title">
          {title === "rmProduct" ? "Xóa sản phẩm" : "Xóa danh mục"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa {title === "rmProduct" ? "Xe" : "danh mục"} có id:{" "}
            {item._id} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleDelete} autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
