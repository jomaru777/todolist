# React Todo App

───────────────────────────────────────────────────
(日本語)

シンプルなTodo管理アプリです。
React + TypeScript の理解を深めるために作成しました。

*本プロジェクトはJavaScriptで実装後、TypeScriptに移行しています。
型定義を明確にすることで、バグの予防と保守性の向上を目的としました。

## リポジトリ
https://github.com/jomaru777/todolist.git

## 機能
- Todoの追加/削除/完了切り替え
- localStorageによる永続化
- コンポーネント分割による責務分離

## 使用技術
- React
- TypeScript
- Vite

## フォルダー構成
src/
├─ components/
│  ├─ todo/
│  └─ ui/
├─ hooks/
├─ types/

## 設計・工夫した点
- 状態管理とロジックをカスタムフック（useTodos）に集約
- 共通の型定義を types/ に切り出し
- UIコンポーネントは表示に専念させる設計

## 学んだこと
- Reactにおける state/props の流れ
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
- Add, delete, and toggle todo items
- Persistent data storage using localStorage
- Clear separation of concerns through component-based design

## Tech Stack
- React
- TypeScript
- Vite

## Folder Structure
src/
├─ components/
│  ├─ todo/
│  └─ ui/
├─ hooks/
├─ types/

## Architecture　&　Design
- Todo state and logic are managed in a custom hook (useTodos)
- Shared data structures are defined in the types/ directory
- UI components focus purely on presentation

## What I Learned
- React data flow using state and props
- The importance of explicit type definitions in TypeScript
- Designing small and reusable components

## Next Step
I am also rebuilding this application using Next.js(App Router)in a separate repository.Designing small and reusable components.

