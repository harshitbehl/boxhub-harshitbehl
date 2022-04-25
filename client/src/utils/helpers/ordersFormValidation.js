import * as yup from "yup";

// Validation Schema Using Yup
const validationSchema = yup.object().shape({
  id: yup
    .string()
    .required("ID is required")
    .max(6, "ID must have exactly 6 digits")
    .min(6, "ID must have exactly 6 digits"),
  status: yup
    .mixed()
    .required("Status is required")
    .oneOf(
      ["pending", "in-progress", "delivered"],
      "Status can only be pending, in-progress or delivered"
    ),
  customer: yup.string().required("Customer is required"),
  sku: yup.string().required("SKU is required"),
  condition: yup
    .mixed()
    .required("Condition is required")
    .oneOf(
      ["new", "cargo-worthy", "wind-watertight"],
      "Only new, cargo-worthy or wind-watertight is valid"
    ),
  size: yup.string().required("Size is required"),
  type: yup
    .mixed()
    .required("Type is required")
    .oneOf(["standard", "high-cube"], "Type can only be standard or high-cube"),
  origin_address: yup.string().required("Origin Address is required"),
  shipping_address: yup.string().required("Shipping Address is required"),
});

export default validationSchema;
