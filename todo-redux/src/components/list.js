import {useSelector} from "react-redux"

export default function List() {
    const tasklist = useSelector(state => state.currentTask)

    return (
        <>
            {
                tasklist.map((item) => (
                    <h1>{item}</h1>
                ))
            }
        </>
    )
}