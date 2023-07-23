export const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload
})


export const deleteTodoAction = (id) => ({
    type: 'REMOVE_TODO',
    payload: id
})