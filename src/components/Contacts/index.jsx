import React from 'react'
//ContactItem
import * as C from './style'
import { FiSearch } from 'react-icons/fi'
import { RiVideoAddFill } from 'react-icons/ri'
import {GoKebabHorizontal} from 'react-icons/go' 
import ConatctItem from '../ContactIem'
import bezos from '../../images/bezos.jpg'
import bill from '../../images/bill.jpg'
import mark from '../../images/mark.jpg'
import elon from '../../images/elon.jpg'

const itens = [
  { src: bezos, name: 'Jeff Bezos' },
  { src: bill, name: 'Bill Gates' },
  { src: mark, name: 'Mark Zuckerberg' },
  { src: elon, name: 'Elon Musk' },
]
const Contacts = () => {
  return (
      <C.Container>
          <C.Header>
              <C.HeaderIcons>
                  <RiVideoAddFill />
                  <FiSearch />
                  <GoKebabHorizontal/>
              </C.HeaderIcons>
      </C.Header>
      {itens.map((item, index) => (
        <ConatctItem key={index} src={item.src} name={item.name} />
      ))}
    </C.Container>
  )
}

export default Contacts