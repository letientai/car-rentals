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
