import { CartInterface } from "../interfaces/CartInterface";

export const summarizeCartValue = (cartValue: CartInterface[], setValue: React.Dispatch<React.SetStateAction<number>>) => {
    const value = cartValue?.map(item => item.price);

    setValue(value.reduce((prev, next) => prev + next, 0));
}

export const clearCart = (setCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {
    setCart([])
}

export const deleteClickedCartItem = (cart: CartInterface[], name: string, setNewCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {
    const cartAfterRemove = cart?.filter(product => product.name !== name)

    setNewCart(cartAfterRemove)
}