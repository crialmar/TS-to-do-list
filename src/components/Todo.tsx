import { TodoId, Todo as TodoType } from "../types/types"; //*----> nos traemos la interface Todo ya que los valores que queremos usar son los mismos
import "./Todo.css";
// type Props = TodoType;

interface Props extends TodoType {
  //*-----> extendemos TodoType e introducimos así una nueva prop
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
        //* OTRA FORMA DE HACER EL TOGGLE COMPLETED (eliminando lo de arriba): onChange={(e) => { toggleCompleted({ id, completed: e.target.checked });}}
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
