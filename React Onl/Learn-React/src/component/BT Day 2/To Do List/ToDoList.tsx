import React, { useState } from "react";

type TToDoItem = {
  id: number;
  title: string;
  isDone: boolean;
};

const ToDoList = (): React.JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const [todos, setTodos] = useState<TToDoItem[]>([]);

  const handleAddTodo = (): void => {
    if (!inputValue.trim()) {
      alert("Fieds cannot be empty!");
      return;
    }

    const newToDo: TToDoItem = {
      id: Date.now(),
      title: inputValue,
      isDone: false,
    };

    setTodos([...todos, newToDo]);
    setInputValue("");
  };

  const handleDeleteToDo = (id: number): void => {
    const newToDo = todos.filter((todo) => todo.id !== id);
    setTodos(newToDo);
  };

  const handleToogleDone = (id: number): void => {
    const newToDo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodos(newToDo);
  };

  return (
    <div className="container my-10">
      <h1 className="text-center text-3xl">To Do List</h1>
      <div className="flex items-center justify-center gap-5 mt-10">
        <div className="">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="p-2 border border-gray-400 rounded-lg w-80 inline-block"
            type="text"
            name="title"
            placeholder="Add Todo"
          />
        </div>
        <button
          onClick={handleAddTodo}
          className=" p-2 border border-gray-400 rounded-[5px] cursor-pointer"
        >
          ADD
        </button>
      </div>

      {todos.length > 0 && (
        <ul className="mt-10 max-w-99 mx-auto ">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between mb-5"
            >
              <h3 className={`${todo.isDone && "line-through text-gray-400"}`}>
                {todo.title}
              </h3>
              <div className="flex gap-5">
                <button
                  onClick={() => handleToogleDone(todo.id)}
                  className="text-blue-500 hover:underline duration-300 transition-all ease-in-out cursor-pointer p-2 border border-gray-400"
                >
                  {todo.isDone ? "Not Done" : "Done"}
                </button>

                <button
                  onClick={() => handleDeleteToDo(todo.id)}
                  className="text-red-500 hover:underline duration-300 transition-all ease-in-out cursor-pointer p-2 border border-gray-400"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!todos.length && (
        <h3 className="text-center mt-10 text-gray-400 italic">
          No Todos Available
        </h3>
      )}
    </div>
  );
};

export default ToDoList;
