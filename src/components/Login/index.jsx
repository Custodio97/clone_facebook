import React, { useContext } from 'react'
import ReactFacebookLogin from 'react-facebook-login'
import { SiFacebook } from 'react-icons/si'
import { AuthContext } from '../../context/auth'
import GlobalStyle from '../../style/GlobalStyle'
import * as C from './style'
const Login = () => {
    const {signInWithFacebook}=useContext(AuthContext)
  return (
      <>
       <C.Container>
              <SiFacebook />
              <ReactFacebookLogin
                  appId='405934544837728'
                  fields='name,email,picture'
                  callback={signInWithFacebook}
              />
          </C.Container>
          <GlobalStyle/>
      </>
  )
}

export default Login