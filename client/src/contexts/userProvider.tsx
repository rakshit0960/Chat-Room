import { useState } from "react"
import userContext from "./userContext"

interface Prop {
    children: JSX.Element | JSX.Element[] | string  
}

export default function UserProvider({children}: Prop) {
    const [username, setUsername] = useState<string>('')
  return (
    <userContext.Provider value={{username, setUsername}} >
        {children}
    </userContext.Provider>
  )
}
