import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTodoAction } from "../store/todo/todo.action"

const TodoListPage = () => {
    const dispatch = useDispatch()
    const {todoList} = useSelector((state) => state.todo)
    const handleDelete = (id) => {
        dispatch(deleteTodoAction(id))
    }
    return(
        <div>
            <h1>todo page</h1>
            {todoList.map(el => <div key={el}>
                {el}
                <button onClick={() => handleDelete(el.id)}>remove</button>
                </div>
                )}
            <Link to={'/'}>create page</Link>
        </div>
    )
}

export default TodoListPage