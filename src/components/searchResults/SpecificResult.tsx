import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/searchResultStyles/specificResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFuncWithParams } from "../../utills/FetchProductsFunc";
import NavLogo from "../nav/NavLogo";
import Footer from "../footer/Footer";

const SpecificResult: React.FC = () => {
    const { productType, productId } = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        fetchAndSetProductsFuncWithParams(productType, productId, setProduct)
    }, []);

    if (!product) {
        return (
            <div className="errorDiv">
                <h1>Something went wrong</h1>
            </div>
        );
    } else {
        return (
            <div className="resultDiv">
                <div className="shortPageNav">
                    <NavLogo />
                </div>
                <div className="specificResultDiv">
                    <div className="resultItem">
                        <h1>{product.name}</h1>
                        <img className="searchResultImg" src={product.img}></img>
                        {product.processor ? <p>Processor: {product.processor}</p> : null}
                        {product.cores ? <p>Cores: {product.cores} cores</p> : null}
                        {product.graphics ? <p>Graphics: {product.graphics}</p> : null}
                        {product.memory ? <p>Memory: {product.memory} GB</p> : null}
                        {product.screen ? <p>Screen: {product.screen}"</p> : null}
                        {product.cache ? <p>Cache: {product.cache} MB</p> : null}
                        {product.screenSize ? <p>Screen size: {product.screenSize}"</p> : null}
                        {product.energyClass ? <p>Energy class: {product.energyClass}</p> : null}
                        {product.type ? <p>Type: {product.type}</p> : null}
                        {product.color ? <p>Color: {product.color}</p> : null}
                        <h2>{product.price} $</h2>

                        <div className="productButtons">
                            <button>Add to cart</button>
                            <button>Add to wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="shortPageFooter">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default SpecificResult;
