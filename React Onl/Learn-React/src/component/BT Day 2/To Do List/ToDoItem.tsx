export type TToDoItem = {
  id: number;
  title: string;
  isDone: boolean;
};

type TToDoItemProps = {
  todo: TToDoItem;
  toggleDone(id: number): void;
  deleteToDo(id: number): void;
};

const ToDoItem = ({ todo, toggleDone, deleteToDo }: TToDoItemProps) => {
  return (
    <div>
      <li key={todo.id} className="flex items-center justify-between mb-5">
        <h3 className={`${todo.isDone ? "line-through text-gray-400" : ""}`}>
          {todo.title}
        </h3>
        <div className="flex gap-5">
          <button
            onClick={() => toggleDone(todo.id)}
            className="text-blue-500 hover:underline duration-300 transition-all ease-in-out cursor-pointer p-2 border border-gray-400"
          >
            {todo.isDone ? "Not Done" : "Done"}
          </button>

          <button
            onClick={() => deleteToDo(todo.id)}
            className="text-red-500 hover:underline duration-300 transition-all ease-in-out cursor-pointer p-2 border border-gray-400"
          >
            Remove
          </button>
        </div>
      </li>
    </div>
  );
};

export default ToDoItem;
