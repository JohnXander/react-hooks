import axios from "axios"
import { useEffect, useState } from "react"

const UseEffect = () => {
    const [data, setData] = useState("")
    const [count, setCount] = useState(0)
    const randomIdx = Math.floor(Math.random() * 101)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((resp) => setData(resp.data[randomIdx].email))
    }, [count])

    return (
        <>
            <div className="use-effect">
                <span className="hook-title">3. UseEffect Hook</span>
                <p><b>Email:</b> {data}</p>
                <p><b>Count:</b> {count}</p>
                <button onClick={() => {
                    setCount(count + 1)
                }}>
                    Click
                </button>
            </div>
        </>
    )
}

export default UseEffect