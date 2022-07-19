import { useContext } from "react"
import { AppContext } from "./UseContext"

const Login = () => {
    const { setUserName } = useContext(AppContext)
    
    return (
        <>
            <input
                type="text"
                onChange={(e) => {setUserName(e.target.value)}}
            />
        </>
    )
}

export default Login