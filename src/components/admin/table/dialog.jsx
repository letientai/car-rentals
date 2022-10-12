import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import carRequest from "../../../api/carRequest";

export default function AlertDialogDelete(prop) {
  const id = prop.idDelete;
  const checkDialog = prop.checkDialog;
  const title = prop.title;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (checkDialog) {
      setOpen(true);
    }
  }, [checkDialog]);

  const handleDelete = () => {
    carRequest.deleteCar(id, dispatch);
    handleClose()
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
        <DialogTitle id="alert-dialog-title">
          {title=== "rmProduct" ? "Xóa sản phẩm" : "Xóa tài khoản"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa xe có id: {id} ?
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
