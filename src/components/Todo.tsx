import { TodoId, Todo as TodoType } from "../types/types";
import "./Todo.css";

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void;
  toggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  toggleCompleted,
}) => {
  const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    toggleCompleted({ id, completed: e.target.checked });
  };
  return (
    <div className="div__toggle">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheck}
      />
      <label>{title}</label>
      <button
        className="delete"
        onClick={() => {
          handleRemove({ id });
        }}
      >
        ❌
      </button>
    </div>
  );
};
