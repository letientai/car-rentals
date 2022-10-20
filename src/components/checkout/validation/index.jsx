import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const FormInfoSchema = Yup.object().shape({
  phone: Yup.string().required("Bắt buộc"),
  gplx: Yup.string().required("Bắt buộc").min(6, "Không hợp lệ").matches(phoneRegExp, "Không hợp lệ"),
});
