import React, { useEffect, useState } from "react";
import "../../styles/searchResultStyles/searchResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFunc } from "../../utills/FetchProductsFunc";
import { useFormik } from "formik";

interface ResultProps {
    filterAnythingButPriceResult: (category: string, chosenOption: string) => void,
    filterPriceResult: (category: string, priceMin?: number, priceMax?: number) => void,
    clearFunc: (products: Product[]) => void,
    products: Product[]
    productType: string | undefined,
}

const FilterResult: React.FC<ResultProps> = props => {
    const [viewedProducts, setViewedProducts] = useState<Product[]>([])
    const [UniqueKeyValues, setUniqueKeyValus] = useState<string[]>([])
    const [UniquePairsValues, setUniquePairsValues] = useState<any>([])

    const brands = Array.from(new Set(props.products.map(products => products.brand)).values());

    useEffect(() => {
        fetchAndSetProductsFunc(props.productType, setViewedProducts)
    }, []);

    useEffect(() => {
        const unwantedVals = ["_id", "name", "img", "scdImg", "category", "__v", "price"]
        viewedProducts.map(productCategory => {
            const keys = Array.from(Object.keys(productCategory).values());
            const neededKeys = keys.filter(keys => keys !== unwantedVals[0] && keys !== unwantedVals[1] && keys !== unwantedVals[2] && keys !== unwantedVals[3] && keys !== unwantedVals[4] && keys !== unwantedVals[5] && keys !== unwantedVals[6])

            setUniqueKeyValus(neededKeys)
        })
    }, [viewedProducts]);

    useEffect(() => {
        const pairValues: any = []
        UniqueKeyValues.forEach(val => {
            const product = Array.from(new Set(viewedProducts.map(product => product[val])).values());
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

    UniquePairsValues.map((values: any) => {
        console.log(values.name)
        console.log(values.values)
    })

    // WRITE INTERFACE FOR UNIQUEPAIRSVALUES BCUS TYPESCRIPTS A BITCH

    return (
        <div className="filters">
            <h2 className="filterHeading">Filter products</h2>
            <div className="producent">
                <div className="clearFilters">
                    <p onClick={() => props.clearFunc(viewedProducts)}>Clear filters</p>
                    <i className="bi bi-arrow-counterclockwise"></i>
                </div>
                <h4 className="producentHeading">Producent</h4>
                {brands.map(brand => {
                    return <p onClick={() => props.filterAnythingButPriceResult('brand', brand)} className="brands">{brand}</p>
                })}
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
            <div className="producent">
                {UniquePairsValues.map((values: any) => {
                    return (
                        <div>
                            <h4 className="producentHeading">{values.name}</h4>
                            <p className="brands">{values.values}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default FilterResult;
