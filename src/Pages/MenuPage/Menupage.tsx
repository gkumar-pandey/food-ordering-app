import React from "react";
import Container from "../../Components/Container/Container";
import { useMenu } from "../../Context/MenuContext/menu-context";
import FoodCard from "../../Components/FoodCard/FoodCard";
import GridContainer from "../../Components/GridContainer/GridContainer";
import Filter from "../../Components/Filter/Filter";
import Heading from "../../Components/Heading/Heading";

const Menupage = () => {
    const { menu, filteredMenu } = useMenu();
    return (
        <div>
            <Container>
                <div>
                    <Filter />
                </div>
                <div>
                    <Heading title='Menu' />
                    <GridContainer>
                        {filteredMenu.length === 0 ? menu.map((menu: any) => (
                            <FoodCard key={menu.id} {...menu} />
                        )) : filteredMenu.map((menu: any) => <FoodCard key={menu.id} {...menu} />)}
                    </GridContainer>
                </div>
            </Container>
        </div>
    );
};

export default Menupage;
