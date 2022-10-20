// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { Alert } from "@mui/material";
// import { useState } from "react";

// export const Dialog = ( openDialog,) => {
//   const [open, setOpen] = useState(false);
//   React.useEffect(() => {
//     setOpen(true);
//   }, [openDialog]);
//   React.useEffect(() => {
//     setOpen(false);
//   }, []);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCheckout = () =>{

//   }
//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <DialogTitle id="alert-dialog-title">
//         XÁC NHẬN THÔNG TIN
//       </DialogTitle>
//       <DialogContent>
//         <DialogContentText id="alert-dialog-description">
//           Bạn chắc chắn tất cả thông tin đều đúng?
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Hủy</Button>
//         <Button
//           onClick={handleCheckout}
//           autoFocus
//         >
//           Đồng ý
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };
