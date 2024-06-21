import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, toggleCompleted , editTodo} from './TodoSlice'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [completed, setCompleted] = useState(todo.completed);
  const dispatch = useDispatch()
  
  return (
    <div
      className={`w-[90%] flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 duration-300  bg-zinc-800`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => {
          setCompleted((prev) => !prev);
          dispatch(toggleCompleted(todo))
          setIsTodoEditable(false);
        }}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-indigo-500 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => {setTodoMsg(e.target.value)}}
        onKeyDown={(e)=>{if(e.key === 'Enter' ){
          setIsTodoEditable(false); 
          dispatch(editTodo(todo)); }}}
        onDoubleClick={() => { isTodoEditable ? null : setIsTodoEditable(true) }}
        readOnly={!isTodoEditable}
      />

      <button
        className={`text-white bg-blue-500 border-0 p-1 focus:outline-none rounded text-md ${todo.completed ? "bg-blue-500/40" : "hover:bg-blue-600"}`}
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            dispatch(editTodo(todo));
            setIsTodoEditable((prev) => !prev);
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="text-white bg-red-500 border-0 py-1 px-1 focus:outline-none hover:bg-red-600 rounded text-md"
      >
        Delete
      </button>
    </div>
  );
}


function Todos() {
  const todos = useSelector(state => state.todos)
  
  return (
    <>
      <div className='my-4 text-3xl'>Todos :</div>
      <div className="flex flex-wrap gap-y-3 justify-center mx-4 w-full md:w-3/4 lg:w-1/2 ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}

function TodoRTK() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12 w-full md:w-3/4 lg:w-1/2 flex justify-center items-center  ">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[60%]"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded md:text-m h-9"
        >
          Add
        </button>
      </form>
      <Todos />
    </div>
  )
}

export default TodoRTK
