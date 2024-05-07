import { Todo_Filters } from "../consts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ListOfTodos = Todo[];

export type Filter_Value = (typeof Todo_Filters)[keyof typeof Todo_Filters];
