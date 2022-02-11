import React, { useState } from "react";
import "../../../styles/profileStyles/loginForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const inputEmail = values.email;
      const inputPassword = values.password;
      formik.resetForm();
    },
  });

  return (
    <div className="loginFormDiv">
      <h1 className="loginHeading">Log in</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="loginFormInputs">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            className="loginFormInput"
            name="email"
            type="text"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="formError">{formik.errors.email}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            className="loginFormInput"
            name="password"
            type="text"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="formError">{formik.errors.password}</p>
          ) : null}
        </div>
        <Button variant="contained" className="loginBtn" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
