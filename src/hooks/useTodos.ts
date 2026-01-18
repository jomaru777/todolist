import { useState,useEffect } from "react";
import type { Todo }from "../types/todo";


export function useTodos() {
    // 初回読み込み
    const [todos, setTodos] = useState<Todo[]>(() => {
            const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    // 保存
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        if (!text.trim()) return; // ← 空の追加を防ぐ
        const newTodo = {
            id: Date.now(),
            text,
            done: false,
        };
        setTodos((prev) => [...prev, newTodo]);
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));

    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    return { todos, addTodo, deleteTodo, toggleTodo };
}