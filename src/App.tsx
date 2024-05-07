import { useEffect, useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import {
  Filter_Value,
  TodoId,
  TodoTitle,
  type Todo as TodoType,
} from "./types/types";
import { Todo_Filters } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: "1",
    title: "Ejemplo de tarea",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : mockTodos;
  });
  const [filterSelected, setFilterSelected] = useState<Filter_Value>(
    Todo_Filters.ALL,
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
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

  const handleFilterChange = (filter: Filter_Value): void => {
    setFilterSelected(filter);
  };

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const freshTodo = [...todos, newTodo];
    setTodos(freshTodo);
  };

  const activeCount = todos.filter((todos) => !todos.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === Todo_Filters.ACTIVE) {
      return !todo.completed;
    }
    if (filterSelected === Todo_Filters.COMPLETED) {
      return todo.completed;
    }
    return todo;
  });

  return (
    <>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        toggleCompleted={handleCompleted}
        handleRemove={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveCompleted}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
};

export default App;
