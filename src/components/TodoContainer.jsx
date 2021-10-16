import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import TodoSetting from './TodoSetting';

export default function TodoContainer() {
  const [todos, setTodos] = useState(
    [],
  );
  const [viewMode, setViewMode] = useState('all');

  const createNew = (name) => {
    setTodos([...todos, {
      id: uuidv4(),
      title: name,
      isChecked: false,
    }]);
  };

  const toggleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.isChecked);
    setTodos(filteredTodos);
  };


  const toggleAll = () => {
    const toggleStatus = countAll() === countActive();
    const newTodos = todos.map((todo) => {
      todo.isChecked = toggleStatus;
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <CreateTodo
        createNew={createNew}
        toggleAll={toggleAll}
      />
      <TodoSetting
        todos={todos}
        deleteCompleted={deleteCompleted}
        setViewMode={setViewMode}
      />
      <TodoList
        todos={todos}
        viewMode={viewMode}
        toggleCheck={toggleCheck}
      />
    </div>
  );
}
