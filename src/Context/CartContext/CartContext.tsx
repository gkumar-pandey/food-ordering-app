import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext<any | undefined>(undefined);

export const CartContextProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState<any>();
    const [isApplyCoupon, setIsApplyCoupon] = useState(false)
    const addToCart = (menuItem: any) => {
        setCart((pre: Array<any>) => [...pre, menuItem])
    }

    const removeFromCartById = (menuId: any) => {
        const filteredMenuCart = cart.filter((menu: any) => menu.id !== menuId);
        setCart(filteredMenuCart)
    }

    const totalDeliveryTime = cart.reduce((acc: any, curr: any) => acc + curr.delivery_time, 0);
    const priceHandler = () => {

        const totalPrice = cart.reduce((acc: any, curr: any) => acc + curr.price, 0);

        if (isApplyCoupon && cart.length > 0) {
            let price = totalPrice - 5
            setTotalPrice(price)
            return
        }

        setTotalPrice(totalPrice)
    }

    const applyCouponHandler = () => {
        setIsApplyCoupon(true)
    }


    useEffect(() => {
        priceHandler()
    }, [cart, isApplyCoupon])

    return <cartContext.Provider value={{ cart, addToCart, removeFromCartById, totalDeliveryTime, totalPrice, applyCouponHandler, isApplyCoupon }} >
        {children}
    </cartContext.Provider>
}

export const useCart = () => useContext(cartContext);