import React, { useEffect, useState } from "react";
import "../../styles/searchResultStyles/searchResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFunc } from "../../utills/FetchProductsFunc";

interface ResultProps {
    filterResult: (category: string, chosenOption: string) => void,
    clearFunc: (products: Product[]) => void,
    products: Product[]
    productType: string | undefined,

}

const FilterResult: React.FC<ResultProps> = props => {
    const [viewedProducts, setViewedProducts] = useState<Product[]>([])

    const brands = Array.from(new Set(props.products.map(products => products.brand)).values());
    const screens = new Set(props.products.map(product => product.screen))
    const prices = Array.from(new Set(props.products.map(product => product.price)).values());
    const processors = new Set(props.products.map(product => product.processor))
    const graphics = new Set(props.products.map(product => product.graphics))
    const memory = new Set(props.products.map(product => product.price))
    const cores = new Set(props.products.map(product => product.cores))
    const caches = new Set(props.products.map(product => product.cache))
    const screenSizes = new Set(props.products.map(product => product.screenSize))
    const energyClasses = new Set(props.products.map(product => product.energyClass))
    const colorTypes = new Set(props.products.map(product => product.color))
    const wireTypes = new Set(props.products.map(product => product.type))

    useEffect(() => {
        fetchAndSetProductsFunc(props.productType, setViewedProducts)
    }, []);

    return (
        <div className="filters">
            <h2 className="filterHeading">Filter products</h2>
            <div className="producent">
                <h4 className="producentHeading">Producent</h4>
                <div className="clearFilters">
                    <p onClick={() => props.clearFunc(viewedProducts)}>Clear filters</p>
                    <i className="bi bi-arrow-counterclockwise"></i>
                </div>
                {brands.map(brand => {
                    return <p onClick={() => props.filterResult('brand', brand)} className="brands">{brand}</p>
                })}
            </div>
            <div className="price">
                <h4 className="producentHeading">Price</h4>
                <div className="priceInputs">
                    <input placeholder="from"></input>
                    <input placeholder="to"></input>
                </div>
            </div>
        </div>
    )
};

export default FilterResult;
