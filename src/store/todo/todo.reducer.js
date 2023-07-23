const initialState = {
    todoList: []
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return{
                todoList: [...state.todoList, action.payload]
            }
            case 'REMOVE_TODO':
                return{
                    todoList: state.todoList.filter(el => el.id !== action.payload)
                }
            default:
                return state
    }
}