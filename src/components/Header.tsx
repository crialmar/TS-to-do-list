import React from "react";
import { TodoTitle } from "../types/types";
import { CreateTodo } from "./CreateTodo";

interface Props {
  onAddTodo: (title: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className={"header"}>
      <h1>To Do List</h1>
      <h2>TS version</h2>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
