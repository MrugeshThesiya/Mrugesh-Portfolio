import { useState } from "react";
import { TodoContext, TodoRTK } from "./";
import { Provider } from 'react-redux'
import store from './TodoRTK/Store'

function Todo() {
  const [isContext, setIsContext] = useState(false);
  return (
    <Provider store={store}>

      <div className={`bg-[#172842] min-h-screen py-[10rem]`}>
        <div className="flex items-center justify-center flex-col">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isContext}
              onChange={() => {
                setIsContext((prev) => !prev);
              }}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 font-medium text-White">
              Toggle Context API / Redux-Toolkit :
            </span>
          </label>
            <div>
              {isContext ? "Context API" : "Redux-Toolkit"}
            </div>
        </div>
        {isContext ? <TodoContext /> : <TodoRTK />}
      </div>
    </Provider>
  );
}

export default Todo;
