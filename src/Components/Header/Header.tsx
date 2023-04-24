import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import Container from '../Container/Container'
import { useCart } from '../../Context/CartContext/CartContext'

const Header = () => {

    const { cart } = useCart()
    return (
        <div className='header' >
            <Container>
                <nav className='navbar' >
                    <div>
                        <h2 className='logo' >Kailash Da Dhaba</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink className='nav-link' to={'/'} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to={'/menu'} >Menu</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to={'/cart'} >Cart({cart.length})  </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Header