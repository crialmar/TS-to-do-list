import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Todos } from "./components/Todos";
//import { TodoCompleted, TodoId } from "./types/types";
import { TodoId, type Todo as TodoType } from "./types/types";

const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    //*-----> otra posibilidad: { id: TodoId; completed: TodoCompleted}
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <h2>TS edition</h2>
      <Todos
        toggleCompleted={handleCompleted}
        handleRemove={handleRemove}
        todos={todos}
      />
    </>
  );
};

export default App;
