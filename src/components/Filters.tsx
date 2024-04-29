import React from "react";
import { Filter_Buttons } from "../consts";
import { Filter_Value } from "../types/types";
import "./Filters.css";

interface Props {
  handleFilterChange: (filter: Filter_Value) => void;
  filterSelected: Filter_Value;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  handleFilterChange,
}) => {
  const handleClick =
    (filter: Filter_Value) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleFilterChange(filter);
    };
  return (
    <ul className="filters">
      {Object.entries(Filter_Buttons).map(([key, { href, literal }]) => {
        return (
          <li className="anchors-li" key={key}>
            <a
              href={href}
              className={`${filterSelected === key ? "selected" : ""}`}
              onClick={handleClick(key as Filter_Value)}
            >
              {literal}
            </a>
          </li>
        );
      })}

      {/**<li>
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
        </li>*/}
    </ul>
  );
};
