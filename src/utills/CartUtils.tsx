import { CartInterface } from "../interfaces/CartInterface";

export const summarizeCartValue = (cartValue: CartInterface[], setValue: React.Dispatch<React.SetStateAction<number>>) => {
    let finalValue = 0;

    cartValue.forEach(value => {
        if (value.qty > 1) {
            finalValue += value.price * value.qty
        } else {
            finalValue += value.price
        }
    })
    setValue(finalValue)
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