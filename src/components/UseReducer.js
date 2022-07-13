import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case "incrementCount":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true})

    return (
        <div className="use-reducer">
            <span className="hook-title">2. UseReducer Hook</span>
            <div>
                <span>{state.count}</span>
                <button
                    onClick={() => {
                        dispatch({type: "incrementCount"})
                        dispatch({type: "toggleShowText"})
                    }}>
                    Increment
                </button>
                <div>{state.showText && <p>This is some text!</p>}</div>
            </div>
        </div>
    )
}

export default UseReducer