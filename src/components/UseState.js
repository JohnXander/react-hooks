import { useState } from "react"

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState("")

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const changeText = (e) => {
        const newName = e.target.value
        if (newName.length <= 10) setInputValue(newName)
    }

    return (
        <div className="use-state">
            <span className="hook-title">1. UseState Hook</span>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Write text..."
                    onChange={changeText}
                />
                <h2>{inputValue}</h2>
            </div>
        </div>
    )
}

export default UseState