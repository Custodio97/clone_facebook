import React, { useContext } from 'react'
import ShortucutItem from '../ShortCutsIcon' 
import { FaUserFriends, FaStore } from 'react-icons/fa'
import { MdGroups, MdOndemandVideo } from 'react-icons/md'
import { GiBackwardTime } from 'react-icons/gi'
import { BsChevronDown } from 'react-icons/bs'
import * as C from './style'
import {AuthContext} from '../../context/auth'

const Shortcuts = () => {
    const {user} =useContext(AuthContext)
  return (
      <C.Container>
      <ShortucutItem Profile={user.avatarUrl} Title={user.name} />
      <ShortucutItem Icon={FaUserFriends} Title="Amigos" />
      <ShortucutItem Icon={MdGroups} Title="Grupos" />
      <ShortucutItem Icon={FaStore} Title="Marketplace"/>
      <ShortucutItem Icon={MdOndemandVideo} Title="Watch" />
      <ShortucutItem Icon={GiBackwardTime} Title="Lembranças" />
      <ShortucutItem Icon={BsChevronDown} Title="Ver mais" colorIcon="gray" />
    </C.Container>
  )
}

export default Shortcuts