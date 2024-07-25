// src/components/AddTask.js

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todo/todoSlice'; // Corrected the import path

export default function AddTask() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (evt) => {
    evt.preventDefault();

      dispatch(addTodo(task)); // Dispatch with the correct payload
      setTask(''); // Reset the input field
    
  };

  return (
    <>
      <form onSubmit={handleAddTask} className="flex items-center justify-between">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit" // Ensure the button submits the form
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </>
  );
}
