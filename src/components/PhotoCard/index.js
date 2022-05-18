import React from 'react'
import { ImgWrapper, Image, Button } from './styles'
import { BsHeart } from 'react-icons/bs'

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Image src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <BsHeart size='16px' />
        {likes} Likes!
      </Button>
    </article>
  )
}

export default PhotoCard
