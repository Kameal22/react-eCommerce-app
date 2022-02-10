import React, { useState } from "react";
import "../../../styles/profileStyles/registrationForm.scss";
import { useFormik } from "formik";
import NavLogo from "../../nav/NavLogo";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string | null>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggler, setToggler] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      acceptTerms: false,
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
      acceptTerms: Yup.bool().oneOf(
        [true],
        "Accept Terms & Conditions is required"
      ),
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
        <form onSubmit={formik.handleSubmit}>
          <div className="registerFormInputs">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              className="registerFormInput"
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
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="formError">{formik.errors.name}</p>
            ) : null}
            <TextField
              id="standard-basic"
              label="Surname"
              variant="standard"
              className="registerFormInput"
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
            />
            {formik.touched.surname && formik.errors.surname ? (
              <p className="formError">{formik.errors.surname}</p>
            ) : null}
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className="registerFormInput"
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
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="formError">{formik.errors.email}</p>
            ) : null}
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              className="registerFormInput"
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
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="formError">{formik.errors.password}</p>
            ) : null}
          </div>
          <FormControlLabel
            control={<Checkbox />}
            label="Agree to terms and conditions"
            name="acceptTerms"
            className="registrationToggle"
          />
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <p className="formError">{formik.errors.acceptTerms}</p>
          ) : null}
          <Button variant="contained" className="registerBtn" type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
