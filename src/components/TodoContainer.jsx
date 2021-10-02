import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import TodoSetting from './TodoSetting';

export default function TodoContainer() {
  const [todos, setTodos] = useState(
    [],
  );
  const [viewMode, setViewMode] = useState('all');
  const [isAllChecked, setIsAllChecked] = useState(true);

  const createNew = (name) => {
    setTodos([...todos, {
      id: uuidv4(),
      title: name,
      isChecked: false,
    }]);
  };

  const handleChange = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const toggleAll = () => {
    const newTodos = todos.map((todo) => {
      todo.isChecked = isAllChecked;
      return todo;
    });
    setIsAllChecked(!isAllChecked);
    setTodos(newTodos);
  };

  const deleteCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.isChecked);
    setTodos(filteredTodos);
  };

  const allCount = todos
    .length;

  const activeCount = todos
    .filter((todo) => !todo.isChecked)
    .length;

  const completedCount = todos
    .filter((todo) => todo.isChecked)
    .length;

  return (
    <div
      className="todo-container"
    >

      <CreateTodo
        createNew={createNew}
        toggleAll={toggleAll}
      />
      <TodoList todos={todos}
                viewMode={viewMode}
                handleChange={handleChange}/>
 
      <TodoSetting
        allCount={allCount}
        activeCount={activeCount}
        completedCount={completedCount}
        setViewMode={setViewMode}
        deleteCompleted={deleteCompleted}
        completedCount={completedCount}
      />
    </div>
  );
}

1. 함수 object
2. input label
3. ul todos->li a span
4. createtodo block으로 분리
5. setting 위쪽 효율
6. useMemo