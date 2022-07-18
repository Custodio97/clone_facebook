import React from 'react'
import * as C from './style' 
const ShorcutItem = ({src,name,profile}) => {
  return (
      <C.Container>
      <C.Image src={src} />
      <C.ImageProfile src={profile} />
      <C.Label>{name}</C.Label>
    </C.Container>
  )
}

export default ShorcutItem