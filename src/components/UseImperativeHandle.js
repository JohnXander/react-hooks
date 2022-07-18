import { useRef } from "react"
import Button from "./Button"

const UseImperativeHandle = () => {
    const buttonRef = useRef(null)
    return (
        <>
            <div className="use-imperative-handle">
                <span className="hook-title">6. UseImperativeHandle Hook</span>
                <button
                    onClick={() => { buttonRef.current.alterToggle() }}
                >
                    Button From Parent
                </button>
                <Button ref={buttonRef} />
            </div>
        </>
    )
}

export default UseImperativeHandle