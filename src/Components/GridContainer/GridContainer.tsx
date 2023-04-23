import React from 'react'
import './gridcontainer.css'

const GridContainer = ({ children }: any) => {
    return (
        <div className='grid-container' >
            {children}
        </div>
    )
}

export default GridContainer