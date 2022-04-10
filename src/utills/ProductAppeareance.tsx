import { WishlistAndLastWatchedInterface } from "../interfaces/LastWatchedInterface"
import { CartInterface } from "../interfaces/CartInterface";
import { ProductInterface } from "../interfaces/ProductInterface";

export const isProductInCartOrWishlist = (place: Array<WishlistAndLastWatchedInterface | CartInterface>, product: ProductInterface | undefined) => {
    return (place.find((productInPlace: { name: string | undefined; }) => productInPlace.name === product?.name))
}