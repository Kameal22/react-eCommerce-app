import { WishlistAndLastWatchedInterface } from "../interfaces/LastWatchedInterface"
import { CartInterface } from "../interfaces/CartInterface";
import { Product } from "../interfaces/ProductInterface";

export const isProductInCartOrWishlist = (place: WishlistAndLastWatchedInterface[] | CartInterface[], product: Product | undefined) => {
    return (place.find(place => place.name === product?.name))
}