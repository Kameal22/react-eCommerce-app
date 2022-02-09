import React, { useState } from "react";
import "../../../styles/profileStyles/registrationForm.scss";
import { useFormik } from "formik";
import NavLogo from "../../nav/NavLogo";
import * as Yup from "yup";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string | null>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "No more than 15 character")
        .required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const inputName = values.name;
      const inpurtSurname = values.surname;
      const inputEmail = values.email;
      const inputPassword = values.password;
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="registerDiv">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="registerFormDiv">
        <h1 className="registerHeading">Register</h1>
        <form onSubmit={formik.handleSubmit} className="registerForm">
          <input
            className="registerFormInput"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            style={
              formik.touched.name && formik.errors.name
                ? { borderColor: "red" }
                : { borderColor: "grey" }
            }
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <p className="formError">{formik.errors.name}</p>
          ) : null}
          <input
            className="registerFormInput"
            id="surname"
            name="surname"
            type="text"
            placeholder="Enter surname"
            style={
              formik.touched.surname && formik.errors.surname
                ? { borderColor: "red" }
                : { borderColor: "grey" }
            }
            value={formik.values.surname}
            onChange={formik.handleChange}
          ></input>
          {formik.touched.surname && formik.errors.surname ? (
            <p className="formError">{formik.errors.surname}</p>
          ) : null}
          <input
            className="registerFormInput"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            style={
              formik.touched.email && formik.errors.email
                ? { borderColor: "red" }
                : { borderColor: "grey" }
            }
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <p className="formError">{formik.errors.email}</p>
          ) : null}
          <input
            className="registerFormInput"
            id="password"
            name="password"
            type="text"
            placeholder="Enter password"
            style={
              formik.touched.password && formik.errors.password
                ? { borderColor: "red" }
                : { borderColor: "grey" }
            }
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <p className="formError">{formik.errors.password}</p>
          ) : null}
          <button className="formSubmitBtn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
