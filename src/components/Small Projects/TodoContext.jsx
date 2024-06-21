import { useEffect, useState } from "react";
import { TodoProvider, useTodo } from "./contexts/todoContext";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={(e) => {
          e.preventDefault();
          addTodo(Date.now(), todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </form>
  );
}

function TodoItem({ todo }) {
  const { toggleCompleted, deleteTodo, editTodo } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg);
  const [completed, setCompleted] = useState(todo.completed);
  return (
    <div
      className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={completed}
        onChange={() => {
          setCompleted((prev) => !prev);
          setIsTodoEditable(false);
          toggleCompleted(todo.id, completed);
        }}
      />
      <input
      type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        onKeyDown={(e)=>{if(e.key === 'Enter' ){
           setIsTodoEditable(false); 
           editTodo(todo.id, todoMsg); }}}
        onDoubleClick={()=> {isTodoEditable ? null : setIsTodoEditable(true)}}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo(todo.id, todoMsg);
            setIsTodoEditable((prev) => !prev);
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

function TodoContext() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoslist = JSON.parse(localStorage.getItem("todos"));
    if (todoslist && todoslist.length > 0) {
      setTodos(todoslist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(id, todo) {
    setTodos((prev) => [{ id: id, todoMsg: todo, completed: false }, ...prev]);
  }

  function toggleCompleted(id, comp) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !comp } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, todoMsg) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todoMsg: todoMsg } : todo
      )
    );
  }

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, editTodo, toggleCompleted }}
    >
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default TodoContext;
