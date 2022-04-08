import { WishlistAndLastWatchedInterface } from "../interfaces/LastWatchedInterface"
import { CartInterface } from "../interfaces/CartInterface";
import { ProductInterface } from "../interfaces/ProductInterface";

export const isProductInCartOrWishlist = (place: WishlistAndLastWatchedInterface[] | CartInterface[], product: ProductInterface | undefined) => {
    return (place.find(place => place.name === product?.name))
}