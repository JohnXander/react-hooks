import { useEffect, useLayoutEffect, useRef } from "react"

export const UseLayoutEffect = () => {
    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log("before & after change:", inputRef.current.value)
    }, [])
    
    useEffect(() => {
        inputRef.current.value = "Xander"
    }, [])

    return (
        <>
            <div className="use-layout-effect">
                <span className="hook-title">5. UseLayoutEffect Hook</span>
                <p>Open the console to understand:</p>
                <input
                    type="text"
                    ref={inputRef}
                    value="John"
                    style={{ width: 300 }} />
            </div>
        </>
    )
}