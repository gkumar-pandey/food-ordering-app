

import { Link } from 'react-router-dom'
import './HeroComp.css'

const HeroComp = () => {
    return (
        <div>
            <div className='hero'   >
                <div className='hero-text' >
                    <h2>Welcome to Kailash Da Dhaba</h2>
                    <Link to='/menu' >
                        <button>Menu</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroComp