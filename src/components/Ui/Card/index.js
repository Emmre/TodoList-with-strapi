import React from 'react'
import s from './Card.module.css'

const Card = ({children,padding = true}) => {
    return (
        <div className={`${s.card} ${padding ? s.padding : ''}`}>
            {children}
        </div>
    )
}

export default Card
