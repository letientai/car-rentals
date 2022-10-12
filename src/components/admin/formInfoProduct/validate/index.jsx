import * as Yup from "yup";
export const FormInfoSchema = Yup.object().shape({
  genre: Yup.string().required("Bắt buộc"),
  productName: Yup.string().required("Bắt buộc"),
  unitPrice: Yup.string().required("Bắt buộc"),
  insuranceFees: Yup.string().required("Bắt buộc"),
  genre: Yup.string().required("Bắt buộc"),
  available: Yup.string().required("Bắt buộc"),
  description: Yup.string().required("Bắt buộc"),
  seats: Yup.string().required("Bắt buộc"),
  fuel: Yup.string().required("Bắt buộc"),
});

const emailEXP =
  "/^[a-zA-Z.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$/";
export const FormUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Bắt buộc"),
  lastName: Yup.string().required("Bắt buộc"),
  email: Yup.string().email("Sai định dạng").required("Bắt buộc"),
  password: Yup.string()
    .required("Bắt buộc")
    .min(8, "Mật Khẩu phải từ 8-16 kí tự"),
  password_confirm: Yup.string()
    .required("Bắt buộc")
    .oneOf([Yup.ref("password"), null], "Không trùng"),
});
