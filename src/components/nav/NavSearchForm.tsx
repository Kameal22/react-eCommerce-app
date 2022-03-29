import React, { useEffect, useState } from "react";
import "../../styles/navStyles/navSearchForm.scss";
import { useFormik } from "formik";
import { fetchEverything } from "../../utills/FetchProductsFunc";

const NavSearchForm: React.FC = () => {
  const [allProduct, setAllProducts] = useState<any>([]); //This is done because I don't want to struggle with sorting data on backend.
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    fetchEverything(setAllProducts)
  }, []) //This is done because I don't want to struggle with sorting data on backend.

  useEffect(() => {
    console.log(filteredData)
  }, [filteredData])

  const handleOnChange = (e: any) => {
    let searchValue = e.target.value

    const filteted = allProduct.filter((product: any) => {
      return product.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredData(filteted)
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      const searchValue = values.search;

      console.log(searchValue)
      formik.resetForm();
    },
  });

  return (
    <div className="navSearchForm">
      <form onChange={handleOnChange} className="mainSearchForm" onSubmit={formik.handleSubmit}>
        <input
          className="mainSearchField"
          name="search"
          type="text"
          placeholder="Search.."
          value={formik.values.search}
          onChange={formik.handleChange}
        ></input>

        <i id="searchIcon" className="bi bi-search" style={{ fontSize: "1.2em" }}></i>
      </form>
    </div>
  );
};

export default NavSearchForm;
