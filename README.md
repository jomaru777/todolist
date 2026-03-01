# React Todo App

────────────────────────────────────────
(日本語)

シンプルなTodo管理アプリです。
React + TypeScript の理解を深めるために作成しました。

*本プロジェクトはJavaScriptで実装後、TypeScriptに移行しています。
型定義を明確にすることで、バグの予防と保守性の向上を目的としました。

## リポジトリ
https://github.com/jomaru777/todolist.git

## 機能
- シンプルなTodo管理アプリ
- 追加/削除/完了切り替えが可能
- localStorageによる永続化
- コンポーネント分割による責務分離

## 使用技術
- React
- TypeScript
- Vite

## フォルダー構成（src配下）
components/
├─ todo/
│  ├─ TodoInput.tsx
│  ├─ TodoItem.tsx
│  └─ TodoList.tsx
└─ ui/
   └─ Button.tsx
hooks/
└─ useTodos.ts
types/
└─ todo.ts

## 設計・工夫した点
- Todoの状態管理とロジックをカスタムフック（useTodos）に集約
- UIコンポーネントは表示に専念させる設計
- 共通の型定義を types/ ディレクトリに切り出し

## 学んだこと
- Reactにおけるstate/propsの流れ
- TypeScriptによる型安全な設計
- 小さなコンポーネントに分割する考え方

## 次のステップ
このアプリをNext.js（App Router）で再実装したリポジトリも作成しています。


───────────────────────────────────────────────────


(English)

A simple Todo management application built to deepen my understanding of React and TypeScript.

*This project was initially implemented in JavaScript and later migrated to TypeScript to improve type safety and maintainability.

## repository
https://github.com/jomaru777/todolist.git

## Features
- Simple Todo management application
- Add, delete, and toggle todos
- Persistent storage using localStorage
- Separation of concerns through component splitting

## Tech Stack
- React
- TypeScript
- Vite

## Folder Structure(Under the src directory)
components/
├─ todo/
│  ├─ TodoInput.tsx
│  ├─ TodoItem.tsx
│  └─ TodoList.tsx
└─ ui/
   └─ Button.tsx
hooks/
└─ useTodos.ts
types/
└─ todo.ts

## Architecture　&　Design
- Todo state and logic are managed in a custom hook (useTodos)
- Clear separation between UI components and logic
- Shared data structures are defined in the types/ directory

## What I Learned
- React data flow using state and props
- The importance of explicit type definitions in TypeScript
- Designing small and reusable components

## Next Step
I am also rebuilding this application using Next.js(App Router)in a separate repository.Designing small and reusable components.

