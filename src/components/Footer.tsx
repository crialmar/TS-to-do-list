import React from "react";
import { Filters } from "./Filters";
import { Filter_Value } from "../types/types";
import "./Footer.css";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: Filter_Value;
  onClearCompleted: () => void; //! ?
  handleFilterChange: (filter: Filter_Value) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="to-do-count">
        <strong>{activeCount}</strong> TAREAS PENDIENTES
      </span>

      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  );
};
