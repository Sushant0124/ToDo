// src/App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todo from './Todo';
import AddTask from './Addtask';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex items-center justify-center App">
        <div className="p-6 max-w-md w-full bg-white rounded shadow-lg">
          <AddTask />
          <Todo />
        </div>
      </div>
    </Provider>
  );
}
