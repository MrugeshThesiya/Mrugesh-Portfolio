import { configureStore,} from '@reduxjs/toolkit'
import todoReducer from "./TodoSlice"


const loadTodo = () => {
  try {
    const todos = localStorage.getItem('todoRTK');
    if (todos === null) {
      return [];
    }
    return JSON.parse(todos);
  } catch (err) {
    console.error(err)
  }
};

const saveTodos = (todos) => {
  try {
    const todoList = JSON.stringify(todos);
    localStorage.setItem('todoRTK', todoList);
  } catch (err) {
    console.error(err)
  }
};

const todos = loadTodo();


const store = configureStore({
  reducer: todoReducer,
  preloadedState : {todos : todos},
})

store.subscribe(() => {
  saveTodos(store.getState().todos);
});

export default store