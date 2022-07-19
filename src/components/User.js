import { useContext } from "react"
import { AppContext } from "./UseContext"

const User = () => {
    const { userName } = useContext(AppContext)
    
    return (
        <>
            <p>User: {userName}</p>
        </>
    )
  }
  
  export default User