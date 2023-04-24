import Container from "../../Components/Container/Container";
import { useCart } from "../../Context/CartContext/CartContext";
import FoodCard from "../../Components/FoodCard/FoodCard";
import GridContainer from "../../Components/GridContainer/GridContainer";

const Cartpage = () => {
    const { cart } = useCart();

    const dileveryTime = cart.reduce(
        (acc: any, curr: any) => acc + curr.delivery_time,
        0
    );

    const totalPrice = cart.reduce((acc: any, curr: any) => acc + curr.price, 0);
    return (
        <div>
            <Container>
                <div>
                    <h2>Cart</h2>
                </div>
                <div>
                    <h2>Total Delivery Time : {dileveryTime}</h2>
                    <h2>Total Price : Rs. {totalPrice}</h2>
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
