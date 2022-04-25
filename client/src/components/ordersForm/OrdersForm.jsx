import React from "react";
import "./OrdersForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";

function OrdersForm({
  submitHandler,
  submitButton,
  orderValues,
  validationSchema,
}) {
  const createField = (labelText, name, placeholder) => {
    return (
      <div className="orders-form__field-container">
        <label htmlFor={name}>{labelText}</label>
        <Field
          type="text"
          name={name}
          placeholder={orderValues ? orderValues[name] : placeholder}
          className={orderValues ? "orders-form__field" : ""}
        />
        <span className="orders-form__error-message">
          <ErrorMessage name={name} />
        </span>
      </div>
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        id: "",
        status: "",
        customer: "",
        sku: "",
        photo: "",
        condition: "",
        size: "",
        type: "",
        origin_address: "",
        shipping_address: "",
      }}
      validationSchema={validationSchema || ""}
      onSubmit={submitHandler}
    >
      {({ values }) => (
        <Form className="orders-form">
          <div className="orders-form__fields-container">
            {createField("ID", "id", "JMB007")}
            {createField("Status", "status", "pending")}
            {createField("Customer", "customer", "John Doe")}
            {createField("SKU", "sku", "JX-20-ST-NEW")}
            {createField("Photo", "photo", "Image URL")}
            {createField("Condition", "condition", "new")}
            {createField("Size", "size", "20ft")}
            {createField("Type", "type", "standard")}
            {createField("Origin Address", "origin_address", "Origin Address")}
            {createField(
              "Shipping Address",
              "shipping_address",
              "Shipping Address"
            )}
          </div>

          <div className="orders-form__button-container">
            <button type="submit">{submitButton}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default OrdersForm;
