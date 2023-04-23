import React from 'react'
import Container from '../../Components/Container/Container'
import { useMenu } from '../../Context/MenuContext/menu-context'
import FoodCard from '../../Components/FoodCard/FoodCard';
import GridContainer from '../../Components/GridContainer/GridContainer';

const Menupage = () => {

    const { menu } = useMenu();
    console.log(menu)
    return (
        <div>
            <Container>
                <div>
                    Filter
                </div>
                <div>
                    <div>
                        <h1>Menu</h1>
                    </div>
                    <GridContainer>
                        {
                            menu.map((menu: any) => <FoodCard key={menu.id} {...menu} />)
                        }
                    </GridContainer>
                </div>

            </Container>
        </div>
    )
}

export default Menupage