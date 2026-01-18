import "./App.css";
import { useTodos } from "./hooks/useTodos";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";

export default function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <>
      <h1>Todoリスト</h1>

      <TodoInput onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
}

