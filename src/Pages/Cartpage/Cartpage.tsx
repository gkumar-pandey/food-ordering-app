import Container from "../../Components/Container/Container";
import { useCart } from "../../Context/CartContext/CartContext";
import FoodCard from "../../Components/FoodCard/FoodCard";
import GridContainer from "../../Components/GridContainer/GridContainer";
import Heading from "../../Components/Heading/Heading";
import "./cart.css";
import { Link } from "react-router-dom";

const Cartpage = () => {
    const {
        cart,
        totalDeliveryTime,
        totalPrice,
        applyCouponHandler,
        isApplyCoupon
    } = useCart();

    return (
        <div>
            <Container>
                <Heading title="Cart" />
                <div className="cart-details">
                    <h3>Total Delivery Time : {totalDeliveryTime} minutes</h3>
                    <h3>Total Price: Rs.{totalPrice?.toFixed()}</h3>
                    {cart.length > 0 ? (
                        <button onClick={applyCouponHandler} disabled={isApplyCoupon}>
                            {isApplyCoupon ? "Coupon Applied" : "Apply Coupon"}
                        </button>
                    ) : (
                        <div className="empty-cart-msg">
                            <h1>Your Cart is Empty just like your stomach</h1>
                            <p>Order some Food Now </p>
                            <span>
                                <Link to={"/menu"}>
                                    <button className="menu-btn" >Menu</button>
                                </Link>
                            </span>
                        </div>
                    )}
                </div>
                <GridContainer>
                    {cart.map((menu: any) => (
                        <FoodCard key={menu.id} {...menu} />
                    ))}
                </GridContainer>
            </Container>
        </div>
    );
};

export default Cartpage;
