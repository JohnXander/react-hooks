import { useState, createContext } from "react"
import Login from "./Login"
import User from "./User"

export const AppContext = createContext(null)

const UseContext = () => {
  const [userName, setUserName] = useState("")

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
          <div className="use-context">
            <span className="hook-title">7. UseContext Hook</span>
            <Login />
            <User />
          </div>
      </AppContext.Provider>
  )
}

export default UseContext