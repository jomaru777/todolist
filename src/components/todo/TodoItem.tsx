import type { Todo } from "../../types/todo";
import Button from "../ui/Button";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>

      <Button onClick={() => onToggle(todo.id)}>
        {todo.done ? "戻す" : "完了"}
      </Button>

      <Button onClick={() => onDelete(todo.id)}>削除する</Button>
    </li>
  );
}
