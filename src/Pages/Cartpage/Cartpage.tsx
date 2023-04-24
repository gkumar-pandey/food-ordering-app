import Container from "../../Components/Container/Container";
import { useCart } from "../../Context/CartContext/CartContext";
import FoodCard from "../../Components/FoodCard/FoodCard";
import GridContainer from "../../Components/GridContainer/GridContainer";
import Heading from "../../Components/Heading/Heading";
import './cart.css'
import { useState } from "react";

const Cartpage = () => {
    const { cart } = useCart();

    const [isApplyCoupon, setIsApplyCoupon] = useState(false)
    const dileveryTime = cart.reduce(
        (acc: any, curr: any) => acc + curr.delivery_time,
        0
    );


    const totalPrice = cart.reduce((acc: any, curr: any) => acc + curr.price, 0);
    return (
        <div>
            <Container>
                <Heading title='Cart' />
                <div className="cart-details" >
                    <h3>Total Delivery Time : {dileveryTime}</h3>
                    {
                        isApplyCoupon ? <h3>Total Price : Rs.{totalPrice - 5} </h3> : <h3>Total Price : Rs. {totalPrice}</h3>
                    }
                    <button onClick={() => setIsApplyCoupon(true)} >Apply coupon</button>
                </div>
                <GridContainer>
                    {cart.map((menu: object) => (
                        <FoodCard {...menu} />
                    ))}
                </GridContainer>
            </Container>
        </div>
    );
};

export default Cartpage;
