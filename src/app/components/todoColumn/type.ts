import { TodoListItemsType } from "@/app/types/todoListItem/todoListItem";

export type TodoColumnType = {
  todoItems: TodoListItemsType[];
  todoType: string;
  isAddValue: boolean;
  handleActionTodoList: (
    name: string,
    type: string,
    isAddValue: boolean
  ) => void;
  backgroundColor: string;
};
