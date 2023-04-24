import React from 'react'
import { useMenu } from '../../Context/MenuContext/menu-context';

const Filter = () => {

    const VEG = 'VEG';
    const SPICY = 'SPICY';
    const PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH';
    const PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW';
    const { searchByUserInput } = useMenu()
    return (
        <div>
            <div>
                <input type='text' placeholder='Search..' onChange={(e) => searchByUserInput(e)} />
            </div>
            <form>
                <input type='checkbox' id='veg' value={VEG} />
                <label htmlFor='veg' >Veg</label>
                <input type='checkbox' id='spicy' value={SPICY} />
                <label htmlFor='spicy' >Spicy</label>
            </form>
            <form>
                <input type='radio' id='low-to-high' name='sort' value={PRICE_LOW_TO_HIGH} />
                <label htmlFor='low-to-high' >Sort(Price) Low To High</label>
                <input type='radio' id='high-to-low' name='sort' value={PRICE_HIGH_TO_LOW} />
                <label htmlFor='high-to-low' >Sort(Price) High To Low</label>
            </form>

        </div>
    )
}

export default Filter