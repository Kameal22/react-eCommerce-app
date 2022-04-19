import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/searchResultStyles/searchResult.scss";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFunc, fetchAndFilterProductsFunc } from "../../utills/FetchProductsFunc";
import NavLogo from "../nav/NavLogo";
import Footer from "../footer/Footer";
import FilterResult from "./FilterResult";

const SearchResult: React.FC = () => {
    const { productType, productCategory, productCategoryIdx } = useParams();
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [showingFilters, setShowingFilters] = useState<boolean>(false);

    useEffect(() => {
        if (!productCategory) {
            fetchAndSetProductsFunc(productType, setProducts)
        } else {
            fetchAndFilterProductsFunc(productType, productCategory, productCategoryIdx, setProducts)
        }
    }, []);

    const filterByAnythingButPriceFunc = (chosenCategory: string, chosenOption: string | number) => {
        const filteredByAnythingButPrice = products.filter((product: any) => {
            return product[chosenCategory] === chosenOption;
        });
        setProducts(filteredByAnythingButPrice)
    }

    const filterByPriceFunc = (chosenCategory: string, priceMin?: number, priceMax?: number) => {
        const filteredByPrice = products.filter((product: any) => {
            if (priceMin && priceMax) {
                return product[chosenCategory] > priceMin && product[chosenCategory] < priceMax
            } else if (priceMin) {
                return product[chosenCategory] > priceMin
            } else if (priceMax) {
                return product[chosenCategory] < priceMax
            }
        })
        setProducts(filteredByPrice)
    }

    const clearFilters = (clearedProducts: ProductInterface[]) => {
        setProducts(clearedProducts)
    }

    if (!products) {
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
                <div className="searchResultDiv">
                    <p onClick={() => setShowingFilters(!showingFilters)} className="showFilters">SHOW FILTERS</p>
                    <FilterResult filterAnythingButPriceResult={filterByAnythingButPriceFunc} filterPriceResult={filterByPriceFunc} clearFunc={clearFilters} products={products} productType={productType} showingFilters={showingFilters} />
                    <div className="searchResult">
                        {products.map(product => {
                            return (<div key={product._id} className="searchProduct">
                                <img className="searchResultImg" src={product.img} alt="img"></img>
                                <Link className="productLink" to={`/specificResult/${product.category}/${product._id}`}><h5>{product.name}</h5></Link>
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
                </div>
                <div className="shortPageFooter">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default SearchResult;
