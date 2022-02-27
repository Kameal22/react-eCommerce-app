import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/searchBarStyles/searchResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFunc } from "../../utills/FetchProductsFunc";
import NavLogo from "../nav/NavLogo";
import Footer from "../footer/Footer";

const SearchResult: React.FC = () => {
    const { productName } = useParams();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchAndSetProductsFunc(productName, setProducts)
    }, []);

    if (!products) {
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
                <div className="searchResultDiv">
                    {products.map(product => {
                        return (<div className="searchProduct">
                            <img className="searchResultImg" src={product.img}></img>
                            <h5>{product.name}</h5>
                            {/* <p>rating should go here perhaps</p> */}
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
                            <h5>{product.price} $</h5>
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

export default SearchResult;
