import React from 'react'
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: task, completed: false },
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl w-full max-w-md p-6">

        <h1 className="text-3xl font-extrabold text-white text-center mb-6">
          ✨ My To-Do List
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-xl bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={addTodo}
            className="px-5 py-3 rounded-xl bg-black/70 text-white font-semibold hover:bg-black transition-all"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white/80 rounded-xl px-4 py-3 shadow-md hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 accent-purple-600"
                />
                <span
                  className={`text-gray-800 ${
                    todo.completed ? "line-through opacity-50" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                🗑
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-white/80 mt-6">
            You’re all caught up 🎉
          </p>
        )}
      </div>
    </div>
  );
}
