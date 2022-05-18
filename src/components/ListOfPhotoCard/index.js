import React from 'react'
import PhotoCard from '../PhotoCard'

const ListOfPhotoCard = () => {
  return (
    <div>
      <ul>
        {[1, 2, 3].map((id) => (
          <PhotoCard key={id} />
        ))}
      </ul>
    </div>
  )
}

export default ListOfPhotoCard
