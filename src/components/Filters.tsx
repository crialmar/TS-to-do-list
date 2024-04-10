import React from "react";
import { Todo_Filters, Filter_Buttons } from "../consts";
import { Filter_Value } from "../types/types";

interface Props {
  filterSelected: Filter_Value;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected === "all" ? "selected" : ""}`}
          onClick={() => {
            onFilterChange("all");
          }}
        >
          Todos
        </a>
        <a
          className={`${filterSelected === "active" ? "selected" : ""}`}
          onClick={() => {
            onFilterChange("active");
          }}
        >
          Activos
        </a>
        <a
          className={`${filterSelected === "completed" ? "selected" : ""}`}
          onClick={() => {
            onFilterChange("completed");
          }}
        >
          Completados
        </a>
      </li>
    </ul>
  );
};
