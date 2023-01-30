import React from 'react'
import './card.css'

const Card = ({ img, name }) => {
  return (
    <div className="card-wrapper">
      <div className="character-image">
        <img src={img} alt="character" />
      </div>
      <div className="character-name">{name}</div>
    </div>

  )
}

export default Card
