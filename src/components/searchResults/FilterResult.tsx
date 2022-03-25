import React, { useEffect, useState } from "react";
import "../../styles/searchResultStyles/searchResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFunc } from "../../utills/FetchProductsFunc";
import { useFormik } from "formik";

interface ResultProps {
    filterAnythingButPriceResult: (category: string, chosenOption: string | number) => void,
    filterPriceResult: (category: string, priceMin?: number, priceMax?: number) => void,
    clearFunc: (products: Product[]) => void,
    products: Product[]
    productType: string | undefined,
}

const FilterResult: React.FC<ResultProps> = props => {
    const [viewedProducts, setViewedProducts] = useState<Product[]>([])
    const [UniqueKeyValues, setUniqueKeyValus] = useState<string[]>([])
    const [UniquePairsValues, setUniquePairsValues] = useState<any>([])

    useEffect(() => {
        fetchAndSetProductsFunc(props.productType, setViewedProducts)
    }, []);

    useEffect(() => {
        const unwantedVals = ["_id", "name", "img", "scdImg", "category", "__v", "price"]
        props.products.map(productCategory => {
            const keys = Array.from(Object.keys(productCategory).values());
            const neededKeys = keys.filter(keys => keys !== unwantedVals[0] && keys !== unwantedVals[1] && keys !== unwantedVals[2] && keys !== unwantedVals[3] && keys !== unwantedVals[4] && keys !== unwantedVals[5] && keys !== unwantedVals[6])

            setUniqueKeyValus(neededKeys)
        })
    }, [props.products]);

    useEffect(() => {
        const pairValues: any = []
        UniqueKeyValues.forEach(val => {
            const product = Array.from(new Set(props.products.map(product => product[val])).values());
            const obj = { name: val, values: [product] }
            pairValues.push(obj)
        })
        setUniquePairsValues(pairValues)
    }, [UniqueKeyValues]);

    const formik = useFormik({
        initialValues: {
            priceMin: '',
            priceMax: '',
        },
        onSubmit: (values) => {
            const inputMinPrice = parseInt(values.priceMin)
            const inputMaxPrice = parseInt(values.priceMax)

            props.filterPriceResult('price', inputMinPrice, inputMaxPrice)

            formik.resetForm()
        },
    });

    return (
        <div className="filters">
            <h2 className="filterHeading">Filter products</h2>
            <div className="clearFilters">
                <p onClick={() => props.clearFunc(viewedProducts)}>Clear filters</p>
                <i className="bi bi-arrow-counterclockwise"></i>
            </div>
            <div className="productOptions">
                {UniquePairsValues.map((values: any) => (
                    <div className="test">
                        <h4 className="producentHeading">{values.name}</h4>
                        {values.values[0].map((value: string | number) => {
                            return (
                                <p onClick={() => props.filterAnythingButPriceResult(values.name, value)} className="brands">{value}</p>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="price">
                <h4 className="producentHeading">Price</h4>
                <div className="priceInputs">
                    <form onSubmit={formik.handleSubmit}>
                        <input name="priceMin" value={formik.values.priceMin}
                            onChange={formik.handleChange} placeholder="from"></input>
                        <input name="priceMax"
                            value={formik.values.priceMax}
                            onChange={formik.handleChange} placeholder="to"></input>
                        <button className="hiddenSubmit" type="submit">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FilterResult;
