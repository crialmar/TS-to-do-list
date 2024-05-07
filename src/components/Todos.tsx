import { type Todo as TodoType, ListOfTodos, TodoId } from "../types/types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  handleRemove: ({ id }: TodoId) => void;
  toggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  handleRemove,
  toggleCompleted,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleCompleted={toggleCompleted}
            handleRemove={handleRemove}
          />
        </li>
      ))}
    </ul>
  );
};
