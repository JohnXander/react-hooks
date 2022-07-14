import { useRef } from "react"

const UseRef = () => {
    const inputRef = useRef(null)

    const changeInput = () => {
        inputRef.current.focus()
        inputRef.current.value = ""
    }

    return (
        <>
            <div className="use-ref">
                <span className="hook-title">4. UseRef Hook</span>
                <input type="text" placeholder="Write text..." ref={inputRef} />
                <button onClick={changeInput}>Click</button>
            </div>
        </>
    )
}

export default UseRef