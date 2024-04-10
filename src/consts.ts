export const Todo_Filters = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const Filter_Buttons = {
  [Todo_Filters.ALL]: {
    literal: "Todos",
    href: `/?filter=${Todo_Filters.ALL}`,
  },
  [Todo_Filters.ACTIVE]: {
    literal: "Activos",
    href: `/?filter=${Todo_Filters.ACTIVE}`,
  },
  [Todo_Filters.COMPLETED]: {
    literal: "Completados",
    href: `/?filter=${Todo_Filters.COMPLETED}`,
  },
};
