import React, { useState } from "react";
import { TodoTitle } from "../types/types";

interface Props {
  saveTodo: (title: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLFormElement>): void => {
    e.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-create-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="¿Cuál es la siguiente tarea?"
        autoFocus
      ></input>
    </form>
  );
};
