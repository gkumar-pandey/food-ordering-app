import Container from "../../Components/Container/Container";
import { useCart } from "../../Context/CartContext/CartContext";
import FoodCard from "../../Components/FoodCard/FoodCard";
import GridContainer from "../../Components/GridContainer/GridContainer";
import Heading from "../../Components/Heading/Heading";
import './cart.css'

const Cartpage = () => {
    const { cart, totalDeliveryTime, totalPrice, applyCouponHandler } = useCart();

    return (
        <div>
            <Container>
                <Heading title='Cart' />
                <div className="cart-details" >
                    <h3>Total Delivery Time : {totalDeliveryTime} minutes</h3>
                    <h3>Total Price: Rs.{totalPrice}</h3>
                    <button onClick={applyCouponHandler} >Apply coupon</button>
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
