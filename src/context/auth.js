import {createContext,useEffect,useState} from 'react'

export const AuthContext = createContext({}) 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        function loadStorage() {
            const strorageUser = localStorage.getItem("AuthFaceClone")
            
            if (strorageUser) {
                setUser(JSON.parse(strorageUser))
            }
        }
        loadStorage()
    }, [])
    const signInWithFacebook = (res) => {
        let data = {
            name: res.name,
            email: res.email,
            avatarUrl:res.picture.data.url,
        }
        setUser(data)
        localStorage.setItem("AuthFaceClone", JSON.stringify(data))
        
    }

    async function sigOut() {
        localStorage.removeItem("AuthFaceClone")
        setUser(null)
    }
    
  return (
      <AuthContext.Provider
          value={{
              signInWithFacebook,
              sigOut,
              user
       }}
      >
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider