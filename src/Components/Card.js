import React from 'react'
const Card = ({topic,image}) => {
  return (
    <div className='card-container'>
        <div className='card-image'>
            <img src={image} alt="image" className='card-img'/>
        </div>
        <p>{topic}</p>
        <p>Daily Quiz</p>
    </div>
  )
}

export default Card
