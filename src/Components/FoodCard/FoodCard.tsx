import React from "react";
import "./FoodCard.css";
import { useCart } from "../../Context/CartContext/CartContext";
import { Link, useLocation } from "react-router-dom";

const FoodCard = (props: any) => {
    const { id, name, description, image, price, delivery_time } = props;
    const location = useLocation();
    const { cart, addToCart, removeFromCartById } = useCart();
    const isMenuAvailableInCart = cart.find((menu: any) => menu.id === id);

    return (
        <div className="card">
            <div>
                <img src={image} alt={name} />
                <div className="card-text">
                    <p>Name : {name}</p>
                    <p>Description : {description} </p>
                    <p>Price : &#8377; {price}</p>
                    <p>Delivery Time : {delivery_time}</p>
                </div>
                <div>
                    {location.pathname === "/cart" ? (
                        <button onClick={() => removeFromCartById(id)} >Remove</button>
                    ) : (
                        <div>
                            {isMenuAvailableInCart ? (
                                <Link to="/cart">
                                    <button>Go To Cart</button>
                                </Link>
                            ) : (
                                <button onClick={() => addToCart({ ...props })}>
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
