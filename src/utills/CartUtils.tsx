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

export const summarizeCartItems = (cart: CartInterface[]) => {
    const qty = cart.map(item => item.qty).reduce((prev, next) => prev + next);

    return qty
}

export const deleteClickedCartItem = (cart: CartInterface[], id: string, setNewCart: React.Dispatch<React.SetStateAction<CartInterface[] | undefined>>) => {
    const productToDelete = cart?.find(product => product.id === id);

    let newCart: CartInterface[];

    if (productToDelete?.qty === 1) {
        const cartAfterRemove = cart?.filter(product => product.id !== productToDelete.id)

        window.localStorage.setItem('cart', JSON.stringify(cartAfterRemove))

        setNewCart(cartAfterRemove)
    }
    else {
        newCart = cart.map(cartIem => {
            if (cartIem.name === productToDelete?.name) {
                productToDelete.qty--
            }
            return cartIem
        })

        window.localStorage.setItem('cart', JSON.stringify(newCart))

        setNewCart(newCart)
    }
    window.location.reload();
}