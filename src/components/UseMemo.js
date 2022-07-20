import axios from "axios"
import { useEffect, useMemo, useState } from "react"

const UseMemo = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(null)

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(resp => {
                setData(resp.data)
            })
    }, [])

    const findLongestName = comments => {
        if (!comments) return null 
        
        let longestName = ""
        for (let i = 0; i < comments.length; i++){
            let currentName = comments[i].name 
            if (currentName.length > longestName.length) {
                longestName = currentName
            }
        }

        console.log("THIS WAS COMPUTED")

        return longestName
    }

    const getLongestName = useMemo(() => {
        findLongestName(data)
    }, [data])


    return (
        <>
            <div className="use-memo">
                <span className="hook-title">8. UseMemo Hook</span>
                <div>{getLongestName}</div>
                <button
                    onClick={() => {
                        setToggle(!toggle)
                    }}
                >
                    {" "}
                    Toggle
                </button>
                {toggle && <p>toggle</p>}
            </div>
        </>
    )
}

export default UseMemo