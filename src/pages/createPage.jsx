import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addTodoAction } from "../store/todo/todo.action"

const CreatePage = () => {
    const [val, setVal] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodoAction(val))
        setVal('')
    }
    return(
        <form onSubmit={onSubmit}>
            <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
            <button>submit</button>

            <Link to={'/todolist'}>todo list</Link>
        </form>
    )
}

export default CreatePage