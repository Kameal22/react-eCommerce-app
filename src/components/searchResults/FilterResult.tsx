import React, { useEffect, useState } from "react";
import "../../styles/searchResultStyles/searchResult.scss";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFunc } from "../../utills/FetchProductsFunc";
import { useFormik } from "formik";
import { v4 as uuid } from 'uuid';

interface UniquePairsInterface {
    name: string, values: (string | number | undefined)[][]
}

interface ResultProps {
    filterAnythingButPriceResult: (category: string, chosenOption: string | number) => void,
    filterPriceResult: (category: string, priceMin?: number, priceMax?: number) => void,
    clearFunc: (products: ProductInterface[]) => void,
    products: ProductInterface[]
    productType: string | undefined,
}

const FilterResult: React.FC<ResultProps> = props => {
    const [viewedProducts, setViewedProducts] = useState<ProductInterface[]>([])
    const [UniqueKeyValues, setUniqueKeyValus] = useState<string[]>([])
    const [UniquePairsValues, setUniquePairsValues] = useState<UniquePairsInterface[]>([])
    const [sortingError, setSortingError] = useState<string>('');

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
        const pairValues: UniquePairsInterface[] = []
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

            if (inputMinPrice > inputMaxPrice) {
                setSortingError("Minimal price cannot be bigger than the maximum one");
            } else if (inputMinPrice < 0 || inputMaxPrice < 0) {
                setSortingError("Cannot sort based on negative values");
            } else {
                props.filterPriceResult('price', inputMinPrice, inputMaxPrice)
                setSortingError('')
            }

            formik.resetForm()
        },
    });

    return (
        <div className="filters">
            <h2 className="filterHeading">Filter products</h2>
            <div onClick={() => props.clearFunc(viewedProducts)} className="clearFilters">
                <p>Clear filters</p>
                <i className="bi bi-arrow-counterclockwise"></i>
            </div>
            <div className="productOptions">
                {UniquePairsValues.map((values: any) => (
                    <div key={uuid()} className="test">
                        <h4 className="producentHeading">{values.name}</h4>
                        {values.values[0].map((value: string | number) => {
                            return (
                                <p key={uuid()} onClick={() => props.filterAnythingButPriceResult(values.name, value)} className="brands">{value}</p>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="price">
                <h4 className="producentHeading">Price</h4>
                <div className="priceInputs">
                    {props.products.length > 1 ? <form onSubmit={formik.handleSubmit}>
                        <input name="priceMin" value={formik.values.priceMin}
                            onChange={formik.handleChange} placeholder="from"></input>
                        <input name="priceMax"
                            value={formik.values.priceMax}
                            onChange={formik.handleChange} placeholder="to"></input>
                        {sortingError ? <p className="formError">{sortingError}</p> : null}
                        <button className="hiddenSubmit" type="submit">
                            Register
                        </button>
                    </form> : null}

                </div>
            </div>
        </div>
    )
};

export default FilterResult;
