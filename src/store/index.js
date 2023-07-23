import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todo.reducer";

const rootReducers = combineReducers({
    todo: todoReducer
})
const store = configureStore({
    reducer: rootReducers
})


export default store