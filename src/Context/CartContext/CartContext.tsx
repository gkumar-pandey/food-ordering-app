import { createContext, useContext, useState } from "react";

const cartContext = createContext<any | undefined>(undefined);

export const CartContextProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any>([]);

    const addToCart = (menuItem: any) => {
        setCart((pre: Array<any>) => [...pre, menuItem])
    }

    const removeFromCartById = (menuId: any) => {
        const filteredMenuCart = cart.filter((menu: any) => menu.id !== menuId);
        setCart(filteredMenuCart)
    }

    return <cartContext.Provider value={{ cart, addToCart, removeFromCartById }} >
        {children}
    </cartContext.Provider>
}

export const useCart = () => useContext(cartContext);