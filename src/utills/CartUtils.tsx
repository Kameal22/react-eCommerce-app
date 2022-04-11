import { CartInterface } from "../interfaces/CartInterface";

export const summarizeCartValue = (cartValue: CartInterface[], setValue: React.Dispatch<React.SetStateAction<number>>) => {
    const value = cartValue?.map(item => item.price);

    setValue(value.reduce((prev, next) => prev + next, 0));
}

export const clearCart = (setCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {
    window.localStorage.removeItem('cart')

    setCart([])
    window.location.reload();
}

export const deleteClickedCartItem = (cart: CartInterface[], qty: number, id: string, setNewCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {

    // //Almost, but I need to find specific product because now it deletes every product that has more than 1 qty
    // const productToDelete = cart?.find(product => product.id === id);

    const cartAfterRemove = cart?.filter(product => product.id !== id)

    window.localStorage.setItem('cart', JSON.stringify(cartAfterRemove))

    setNewCart(cartAfterRemove)
    window.location.reload();
}