import React from "react";
import "../../../styles/profileStyles/loginForm.scss";
import { useFormik } from "formik";

const LoginForm: React.FC = () => {
  const placeholder: string = "Login";
  const formik = useFormik({
    initialValues: {
      product: "",
    },
    onSubmit: (values) => {
      const inputProduct = values.product;
      formik.resetForm();
    },
  });

  return (
    <div className="navLogo">
      <h1>Login form</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="loginFormInput"
          id="product"
          name="product"
          type="text"
          placeholder={placeholder}
          value={formik.values.product}
          onChange={formik.handleChange}
        ></input>
      </form>
    </div>
  );
};

export default LoginForm;
