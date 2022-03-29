import React, { useEffect, useState } from "react";
import "../../styles/navStyles/navSearchForm.scss";
import { useFormik } from "formik";
import { fetchEverything } from "../../utills/FetchProductsFunc";

const NavSearchForm: React.FC = () => {
  const [allProductNames, setAllProductNames] = useState<any>([]); //This is done because I don't want to struggle with sorting data on backend.
  const [allProducts, setAllProducts] = useState<any[]>([]); //This is done because I don't want to struggle with sorting data on backend.
  const [filteredData, setFilteredData] = useState<any>([]);
  const [suggestions, setSuggestions] = useState<any>([]);

  useEffect(() => {
    fetchEverything(setAllProducts, setAllProductNames)
  }, []) //This is done because I don't want to struggle with sorting data on backend.

  // Now after a choice look for chosen value in allProducts array and use it

  const handleOnChange = (e: any) => {
    let searchValue = e.target.value

    const filteted = allProductNames.filter((product: any) => {
      return product.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredData(filteted) //This might not be needed

    //Now look for filtered values in allProduct and set them to suggestions with IMG and NAME.
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
