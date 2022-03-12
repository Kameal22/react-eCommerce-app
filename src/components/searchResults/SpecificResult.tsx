import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/searchResultStyles/specificResult.scss";
import { Product } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFuncWithParams } from "../../utills/FetchProductsFunc";
import NavLogo from "../nav/NavLogo";
import Footer from "../footer/Footer";
import { useSetCart } from "../../contexts/CartContext";

const SpecificResult: React.FC = () => {
    const setCart = useSetCart();
    const { productType, productId } = useParams();
    const [product, setProduct] = useState<Product>();
    const [currImg, setCurrImg] = useState<string>();

    const handleSetCart = (name: string, img: string, price: number) => {
        setCart((cart) => {
            return [...cart, { name: name, img: img, price: price }]
        })
    }

    useEffect(() => {
        fetchAndSetProductsFuncWithParams(productType, productId, setProduct)
    }, []);

    useEffect(() => {
        setCurrImg(product?.img)
    }, [product])

    const changeImg = () => {
        if (currImg === product?.img) {
            setCurrImg(product?.scdImg)
        } else { setCurrImg(product?.img) }
    }

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
                        <h2 className="productHeading">{product.name}</h2>
                        <div className="imgDiv">
                            <i onClick={changeImg} id="leftArrow" className="bi bi-arrow-left-circle" style={{ fontSize: "1.4em" }}></i>
                            <img className="searchResultImg" src={currImg}></img>
                            <i onClick={changeImg} id="rightArrow" className="bi bi-arrow-right-circle" style={{ fontSize: "1.4em" }}></i>
                        </div>
                        <div className="smallerImgsDiv">
                            <img onClick={() => setCurrImg(product.img)} className={product.img === currImg ? 'smallerImgCHOSEN' : 'smallerImg'} src={product.img}></img>
                            <img onClick={() => setCurrImg(product.scdImg)} className={product.scdImg === currImg ? 'smallerImgCHOSEN' : 'smallerImg'} src={product.scdImg}></img>
                        </div>
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
                            <button onClick={() => handleSetCart(product.name, product.img, product.price)}>Add to cart</button>
                            {window.localStorage.user ? <button>Add to wishlist</button> : null}
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
