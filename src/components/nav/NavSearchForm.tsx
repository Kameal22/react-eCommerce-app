import React, { useState } from "react";
import "../../styles/navStyles/navSearchForm.scss";
import { useFormik } from "formik";
import axios from "axios";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const NavSearchForm: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      const searchValue = values.search;

      console.log(values)

      axios.post("http://localhost:3000/search", {
        searchKeys: searchValue
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      formik.resetForm();
    },
  });

  return (
    <div className="navSearchForm">
      <form onSubmit={formik.handleSubmit}>
        <div className="mainSearchFormInput">
          <TextField
            id="standard-basic"
            label="search"
            variant="standard"
            className="mainSearchField"
            name="search"
            type="text"
            value={formik.values.search}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <Button variant="contained" className="hiddenSubmit" type="submit">
          Register
        </Button>
      </form>
      <i className="bi bi-search" style={{ fontSize: "1.2em" }}></i>
    </div>
  );
};

export default NavSearchForm;
