/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, viewMode, toggleCheck }) {
  return (
    <ul className="todo-list">
      {todos
        .filter((item) => {
          if (viewMode === 'completed' && item.isChecked) {
            return true;
          } if (viewMode === 'active' && !item.isChecked) {
            return true;
          } if (viewMode === 'all') {
            return true;
          }
          return false;
        })
        .map((item) => (
          <li key={item.id} className="todo-item">
            <TodoItem
              key={item.id}
              toggleCheck={toggleCheck}
              item={item}
            />
          </li>
        ))}
    </ul>

  );
}
