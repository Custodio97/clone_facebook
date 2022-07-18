import React from 'react'
import NewPost from '../NewPost'
import Posts from '../Posts'
import Stories from '../Stories'
import * as C from './style'
const Feed = () => {
  return (
      <C.Container>
      <Stories />
      <NewPost />
       <Posts/>
    </C.Container>
  )
}

export default Feed