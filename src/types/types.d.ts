//* PARA LOS TIPOS E INTERFACES QUE SE VAYAN A REUTILIZAR
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

//?----- GP A LA HORA DE TRATAR CON TP: PICK
/**Ponte que el día de mañana cambian el type del id de un string a un number. ¿Qué pasaría? Que tienes que ir mirando archivo por archivo para
 * cambiar el "(id: string)" y ponerlo en el type correspondiente, e incluso dejaría de funcionar la aplicación.
 *
 * Para evitarlo podemos exportar el type de dato y así protegerlo
 */
//*------- PICK
/** Permite crear un nuevo tipo tomando solo algunas propiedades de otro tipo dado. Esto es útil cuando solo necesitas ciertas propiedades
 * de untipo más grande y deseas crear un tipo nuevo con esas propiedades seleccionadas.
 * Lo opuesto es OMIT: export type todoId = Omit<todo, 'completed' | 'title'>
 */
//* ESTRUCTURA DE PICK:  ({ id }: TodoId) => void//  ANTES: (id: string) => void

export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ListOfTodos = Todo[];
