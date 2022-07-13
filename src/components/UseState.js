import { useState } from "react"

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState("John")

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const changeName = (e) => {
        const newName = e.target.value
        if (newName.length < 5) setInputValue(newName)
    }

    return (
        <div className="use-state">
            <span>UseState Hook</span>
            <div>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Name..."
                    onChange={changeName}
                />
                <h2>{inputValue}</h2>
            </div>
        </div>
    )
}

export default UseState