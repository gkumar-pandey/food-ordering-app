
import { useMenu } from '../../Context/MenuContext/menu-context';
import './filter.css'

const Filter = () => {

    const VEG = 'is_vegetarian';
    const SPICY = 'is_spicy';
    const PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH';
    const PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW';
    const { searchByUserInput, sortByPriceHandler, checkedBtnHandler } = useMenu()




    return (
        <div>
            <div className='filter-container' >
                <h2>Filter </h2>
                <div>
                    <input type='text' className='search-bar' placeholder='Search..' onChange={(e) => searchByUserInput(e)} />
                </div>
                <div>
                    <input type='checkbox' id='veg' value={VEG} onChange={(e) => checkedBtnHandler(e)} />
                    <label htmlFor='veg' >Veg</label>
                    <input type='checkbox' id='spicy' value={SPICY} onChange={(e) => checkedBtnHandler(e)} />
                    <label htmlFor='spicy' >Spicy</label>
                </div>
                <div>
                    <input type='radio' id='low-to-high' name='sort' value={PRICE_LOW_TO_HIGH} onChange={(e) => sortByPriceHandler(e)} />
                    <label htmlFor='low-to-high' >Sort(Price) Low To High</label>
                    <input type='radio' id='high-to-low' name='sort' value={PRICE_HIGH_TO_LOW} onChange={(e) => sortByPriceHandler(e)} />
                    <label htmlFor='high-to-low' >Sort(Price) High To Low</label>
                </div>

            </div>
        </div>
    )
}

export default Filter