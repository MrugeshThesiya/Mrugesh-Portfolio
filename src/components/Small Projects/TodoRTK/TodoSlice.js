import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { todos: [] }

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id : nanoid(),
        text : action.payload,
        completed : false,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? {...todo,text : action.payload.text} : todo ))
    },
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? {...todo,completed : !action.payload.completed} : todo ))
      console.log(action.payload)
    }
  },
})

export const { addTodo, removeTodo , toggleCompleted , editTodo} = todoSlice.actions
export default todoSlice.reducer