import GlobalStyle from './style/GlobalStyle'
import React, { useContext } from 'react';
import Login from './components/Login';
import {AuthContext} from './context/auth'
import Header from './components/Header';
import Body from './components/Body'
function App() {
  console.log("opa")
  const { user } = useContext(AuthContext)
  if (!user) return <Login/>
  return (
    <>
      <Header />
      <Body/>
      <GlobalStyle/>
    </>
  );
}

export default App;
