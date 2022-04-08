import { WishlistAndLastWatchedInterface } from "../interfaces/LastWatchedInterface"
import { ProductInterface } from "../interfaces/ProductInterface"

export const handleSetLastWatched = (lasties: WishlistAndLastWatchedInterface[], product: ProductInterface, setLastWatched: React.Dispatch<React.SetStateAction<WishlistAndLastWatchedInterface[]>>, name: string, img: string, price: number, category: string, id: string) => {
    if (!lasties.some((products) => products.name === name)) {
        if (lasties.length <= 4 && product) {
            setLastWatched((lw => {
                return [...lw, { name: name, img: img, price: price, category: category, id: id }]
            }))

        } else {
            lasties.pop()
            setLastWatched((lw => {
                return [{ name: name, img: img, price: price, category: category, id: id }, ...lw]
            }))

        }
    }
}