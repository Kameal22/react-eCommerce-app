import React, { useEffect, useState } from "react";
import "../../styles/navStyles/navSearchForm.scss";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { fetchEverything } from "../../utills/FetchProductsFunc";

const NavSearchForm: React.FC = () => {
  const [allProducts, setAllProducts] = useState<any[]>([]); //This is done because I don't want to struggle with sorting data on backend.
  const [filteredData, setFilteredData] = useState<any>([]);
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    fetchEverything(setAllProducts)
  }, []) //This is done because I don't want to struggle with sorting data on backend.

  const handleOnChange = (e: any) => {
    let searchValue = e.target.value
    setSearching(true)

    if (!searchValue) {
      setSearching(false)
    }

    const filtered = allProducts.filter((product: any) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredData(filtered)
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      formik.resetForm();
    },
  });

  return (
    <div className="navSearchForm">
      <form autoComplete="off" onChange={handleOnChange} className="mainSearchForm" onSubmit={formik.handleSubmit}>
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
      {searching ? <div className="searchHints">
        {filteredData.map((data: any) => {
          return (
            <Link key={uuid()} className="productLink" to={`/specificResult/${data.category}/${data._id}`}>
              <p className="searchHintName">{data.name}</p>
            </Link>
          )
        })}
      </div> : null}


    </div>
  );
};

export default NavSearchForm;
