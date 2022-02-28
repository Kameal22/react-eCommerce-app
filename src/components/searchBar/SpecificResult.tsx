import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/searchBarStyles/specificResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFuncWithParams } from "../../utills/FetchProductsFunc";
import NavLogo from "../nav/NavLogo";
import Footer from "../footer/Footer";

const SpecificResult: React.FC = () => {
    const { productCategory, productId } = useParams();
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetchAndSetProductsFuncWithParams(productCategory, productId, setProduct)
    }, []);

    console.log(productCategory)
    console.log(productId)
    if (!product) {
        return (
            <div className="errorDiv">
                <h1>Something went wrong</h1>
            </div>
        );
    } else {
        return (
            <div className="resultDiv">
                <div className="registerNav">
                    <NavLogo />
                </div>
                <div className="specificResultDiv">
                    {product.map(productDetails => {
                        return (<div className="searchProduct">
                            <img className="searchResultImg" src={productDetails.img}></img>
                            <h5>{productDetails.name}</h5>
                            {productDetails.processor ? <p>Processor: {productDetails.processor}</p> : null}
                            {productDetails.cores ? <p>Cores: {productDetails.cores} cores</p> : null}
                            {productDetails.graphics ? <p>Graphics: {productDetails.graphics}</p> : null}
                            {productDetails.memory ? <p>Memory: {productDetails.memory} GB</p> : null}
                            {productDetails.screen ? <p>Screen: {productDetails.screen}"</p> : null}
                            {productDetails.cache ? <p>Cache: {productDetails.cache} MB</p> : null}
                            {productDetails.screenSize ? <p>Screen size: {productDetails.screenSize}"</p> : null}
                            {productDetails.energyClass ? <p>Energy class: {productDetails.energyClass}</p> : null}
                            {productDetails.type ? <p>Type: {productDetails.type}</p> : null}
                            {productDetails.color ? <p>Color: {productDetails.color}</p> : null}
                            <h5>{productDetails.price} $</h5>
                        </div>)
                    })}
                </div>
                <div className="cartFooterDiv">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default SpecificResult;
