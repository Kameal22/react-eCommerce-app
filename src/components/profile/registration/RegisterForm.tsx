import { useNavigate } from "react-router-dom";
import "../../../styles/profileStyles/registrationForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "No more than 15 character")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const inputName = values.name;
      const inputEmail = values.email;
      const inputPassword = values.password;

      axios.post("http://localhost:3000/register", {
        username: inputName,
        email: inputEmail,
        password: inputPassword
      })
        .then(res => {
          window.localStorage.setItem('user', inputName);
        })
        .then(res => {
          navigate(`/`, { replace: true });
        })
        .catch(err => {
          console.log(err)
        })
      formik.resetForm();
    },
  });

  return (
    <div className="registerFormDiv">
      <h1 className="registerHeading">Register</h1>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="registerFormInputs">
          <TextField
            id="standard-basic1"
            label="Name"
            variant="standard"
            className="registerFormInput"
            name="name"
            type="text"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="formError">{formik.errors.name}</p>
          ) : null}
          <TextField
            id="standard-basic2"
            label="Email"
            variant="standard"
            className="registerFormInput"
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
            id="standard-basic3"
            label="Password"
            variant="standard"
            className="registerFormInput"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="formError">{formik.errors.password}</p>
          ) : null}
        </div>
        <Button variant="contained" className="registerBtn" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
