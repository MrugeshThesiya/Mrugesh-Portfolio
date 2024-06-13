import { createContext, useContext } from "react";

const todoContext = createContext({
    todos : [
        {
            id : 1,
            todoMsg : "Hello World",
            completed : false
        }
    ],
    addTodo : (id,todo)=>{},
    deleteTodo : (id) => {},
    editTodo: (id,todoMsg)=>{},
    toggleCompleted : (id) => {}
})

export const TodoProvider = todoContext.Provider

export function useTodo(){
    return useContext(todoContext)
}