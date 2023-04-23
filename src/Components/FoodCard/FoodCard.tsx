import React from 'react'
import './FoodCard.css'

const FoodCard = (props: any) => {
    const { id, name, description, image, price, delivery_time } = props
    return (
        <div className='card' >
            <div>
                <img src={image} alt={name} />
                <div className='card-text' >
                    <p>Name : {name}</p>
                    <p>Description : {description} </p>
                    <p>Price : {price}</p>
                    <p>Delivery Time : {delivery_time}</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default FoodCard