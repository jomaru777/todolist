import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");

  // 初回読み込み
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  
  // 保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return; // ← 空の追加を防ぐ
    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setTodos([...todos, newTodo]); 
    setInput(""); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <h1>テスト</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />

      <button onClick={addTodo}>追加する</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </span>

            <button onClick={() => toggleTodo(todo.id)}>
              {todo.done ? "戻す" : "完了"}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>削除する</button>
          </li>
        ))}
      </ul>
    </>
  );
}
