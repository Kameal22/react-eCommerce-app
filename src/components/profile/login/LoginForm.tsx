import { useNavigate } from "react-router-dom";
import "../../../styles/profileStyles/loginForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const inputName = values.name;
      const inputPassword = values.password;

      axios.post("http://localhost:3000/login", {
        name: inputName,
        password: inputPassword
      })
        .then(res => {
          window.localStorage.setItem('user', inputName);
          navigate(`/`, { replace: true });
        })
        .catch(err => {
          console.log(err)
        })
      formik.resetForm();
    },
  });

  return (
    <div className="loginFormDiv">
      <h1 className="loginHeading">Log in</h1>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="loginFormInputs">
          <TextField
            id="standard-basic1"
            label="Name"
            variant="standard"
            className="loginFormInput"
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
            label="Password"
            variant="standard"
            className="loginFormInput"
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
        <Button variant="contained" className="loginBtn" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
