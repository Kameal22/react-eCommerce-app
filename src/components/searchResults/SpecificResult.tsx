import React, { useEffect, useState, useContext } from "react";
import { LatelyWatchedContext, useSetLW } from "../../contexts/LatelyWatchedContext";
import { useParams } from "react-router-dom";
import "../../styles/searchResultStyles/specificResult.scss";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { fetchAndSetProductsFuncWithParams } from "../../utills/FetchProductsFunc";
import NavLogo from "../nav/NavLogo";
import Footer from "../footer/Footer";
import { useSetCart, CartContext } from "../../contexts/CartContext";
import { v4 as uuid } from 'uuid'
import { useSetWishlist, WishlistContext } from "../../contexts/WishListContext";
import Popup from "../../utills/Popup";
import { isProductInCartOrWishlist } from "../../utills/ProductAppeareance";
import { handleSetLastWatched } from "../../utills/HandleSetProducts";

const SpecificResult: React.FC = () => {
    const setCart = useSetCart();
    const setLastWatched = useSetLW();
    const setWishlist = useSetWishlist();
    const lasties = useContext(LatelyWatchedContext);
    const wishes = useContext(WishlistContext);
    const cart = useContext(CartContext)

    const { productType, productId } = useParams();
    const [product, setProduct] = useState<ProductInterface>();
    const [currImg, setCurrImg] = useState<string>();
    const [popUpMsg, setPopUpMsg] = useState<string>();

    useEffect(() => {
        fetchAndSetProductsFuncWithParams(productType, productId, setProduct)
    }, []);

    useEffect(() => {
        if (product)
            handleSetLastWatched(lasties, product, setLastWatched, product.name, product.img, product.price, product?.category, product?._id)
    }, [product])

    useEffect(() => {
        setCurrImg(product?.img)
    }, [product])

    const handleSetCart = (id: string, name: string, img: string, price: number) => {
        setCart((cart) => {
            return [...cart, { id: id, name: name, img: img, price: price }]
        })
        setPopUpMsg('Added to cart')
        setTimeout(() => {
            setPopUpMsg('')
        }, 1500)
    }

    const handleSetWishlist = (name: string, img: string, price: number, category: string, id: string) => {
        if (!wishes.some(wish => wish.name === name)) {
            setWishlist((product => {
                return [...product, { name: name, img: img, price: price, category: category, id: id }]
            }))
            setPopUpMsg('Added to wishlist')
            setTimeout(() => {
                setPopUpMsg('')
            }, 1500)
        } else {
            setPopUpMsg('You alredy think about this one')
            setTimeout(() => {
                setPopUpMsg('')
            }, 1500)
        }
    }

    const clearPopUp = () => {
        setPopUpMsg('')
    }

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
                        {isProductInCartOrWishlist(wishes, product) ? <i id="wishingIcon" style={{ fontSize: "2em", color: "red" }} className="bi bi-balloon-heart"></i> : null}
                        {isProductInCartOrWishlist(cart, product) ? <i id="cartIcon" style={{ fontSize: "2em", color: "red" }} className="bi bi-cart-check"></i> : null}
                        <div className="imgDiv">
                            <i onClick={changeImg} id="leftArrow" className="bi bi-arrow-left-circle" style={{ fontSize: "1.4em" }}></i>
                            <img className="searchResultImg" src={currImg} alt="img"></img>
                            <i onClick={changeImg} id="rightArrow" className="bi bi-arrow-right-circle" style={{ fontSize: "1.4em" }}></i>
                        </div>
                        <div className="smallerImgsDiv">
                            <img onClick={() => setCurrImg(product.img)} alt="img" className={product.img === currImg ? 'smallerImgCHOSEN' : 'smallerImg'} src={product.img}></img>
                            <img onClick={() => setCurrImg(product.scdImg)} alt="img" className={product.scdImg === currImg ? 'smallerImgCHOSEN' : 'smallerImg'} src={product.scdImg}></img>
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
                            <button onClick={() => handleSetCart(uuid(), product.name, product.img, product.price)}>Add to cart</button>
                            {window.localStorage.user ? <button onClick={() => handleSetWishlist(product.name, product.img, product.price, product.category, product._id)}>Add to wishlist</button> : null}
                        </div>
                    </div>
                </div>
                <Popup msg={popUpMsg} clearMsg={clearPopUp} />
                <div className="shortPageFooter">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default SpecificResult;
