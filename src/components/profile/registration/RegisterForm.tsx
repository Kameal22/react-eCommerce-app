import React from "react";
import "../../../styles/profileStyles/registrationForm.scss";
import { useFormik } from "formik";
import NavLogo from "../../nav/NavLogo";

const RegisterForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const inputName = values.name;
      const inpurtSurname = values.surname;
      const inputEmail = values.email;
      const inputPassword = values.password;
      formik.resetForm();
    },
  });

  return (
    <div className="registerDiv">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="registerFormDiv">
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="registerFormInput"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
          ></input>
          <input
            className="registerFormInput"
            id="surname"
            name="surname"
            type="text"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
          ></input>
          <input
            className="registerFormInput"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          ></input>
          <input
            className="registerFormInput"
            id="password"
            name="password"
            type="text"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
