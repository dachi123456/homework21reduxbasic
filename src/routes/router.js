import CreatePage from "../pages/createPage";
import TodoListPage from "../pages/todoListPage";

const routes = [
    {
        element: <CreatePage />,
        path: '/'
    },
    {
        element: <TodoListPage />,
        path: '/todolist'
    }
]

export default routes