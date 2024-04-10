import React from "react";

export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="to-do-count">
        <strong>{todos.length}</strong> TAREAS PENDIENTES
      </span>

      <Filters filtersSelected={} onFilterChange={() => {}} />
    </footer>
  );
};
