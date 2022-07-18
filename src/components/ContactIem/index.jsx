import React from 'react'
import  * as C from './style' 
const ConatctItem = ({src,name}) => {
    return (
        <C.Container>
            <C.Image src={src} />
            {name}
        </C.Container>
  )
}

export default ConatctItem