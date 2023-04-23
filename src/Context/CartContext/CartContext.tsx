import { createContext, useContext, useState } from "react";

const cartContext = createContext<any | undefined>(undefined);

export const CartContextProvider = ({ children }: any) => {
    const [cart, setCart] = useState([]);

    const addToCart = (menuItem: any) => {
        setCart(menuItem)
    }

    return <cartContext.Provider value={{ cart, addToCart }} >
        {children}
    </cartContext.Provider>
}

export const useCart = () => useContext(cartContext);