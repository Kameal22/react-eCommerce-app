import { CartInterface } from "../interfaces/CartInterface";

export const summarizeCartValue = (cartValue: CartInterface[], setValue: React.Dispatch<React.SetStateAction<number>>) => {
    const value = cartValue?.map(item => item.price);

    setValue(value.reduce((prev, next) => prev + next, 0));
}

export const clearCart = (setCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {
    setCart([])
    window.localStorage.removeItem('cart')
}

export const deleteClickedCartItem = (cart: CartInterface[], id: string, setNewCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {
    const cartAfterRemove = cart?.filter(product => product.id !== id)

    window.localStorage.setItem('cart', JSON.stringify(cartAfterRemove))

    setNewCart(cartAfterRemove)
}