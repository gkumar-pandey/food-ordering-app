import React from "react";
import Container from "../../Components/Container/Container";
import { useMenu } from "../../Context/MenuContext/menu-context";
import FoodCard from "../../Components/FoodCard/FoodCard";
import GridContainer from "../../Components/GridContainer/GridContainer";
import Filter from "../../Components/Filter/Filter";

const Menupage = () => {
    const { menu, filteredMenu } = useMenu();
    return (
        <div>
            <Container>
                <div>Filter</div>
                <div>
                    <Filter />
                </div>
                <div>
                    <div>
                        <h1>Menu</h1>
                    </div>

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
