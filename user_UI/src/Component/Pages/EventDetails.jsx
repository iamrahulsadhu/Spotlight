import React from 'react'
import { useParams } from 'react-router-dom'
const EventDetails = () => {
    const id=useParams();
    console.log(id);
  return (
    <div>
        <span>{id.id}</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    </div>
  )
}

export default EventDetails
