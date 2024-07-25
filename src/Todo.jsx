// src/components/Todo.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, markAsDone } from './features/todo/todoSlice';

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleMarkasDone = (id) => {
    dispatch(markAsDone(id));
  };

//   const handleToggleDone = (id) => {
//     dispatch(markAsDone(id));
//   };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md items-center">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="list-disc pl-5">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="mb-2 flex items-center">
              <span
                // onClick={() => handleToggleDone(todo.id)}
                className={`flex-1 cursor-pointer ${
                  todo.isDone ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.task}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Delete
              </button><button
                onClick={() => handleMarkasDone(todo.id)}
                className="ml-4 text-blue-500 hover:text-blue-700"
              >
                Mark as Done
              </button>

            </li>
          ))
        ) : (
          <li className="text-gray-500">No tasks available</li>
        )}
      </ul>
    </div>
  );
}
