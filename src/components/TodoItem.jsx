import React from 'react';
import CheckBox from './CheckBox';
// import ShowTodo from './ShowTodo';
import './TodoItem.scss';

export default function TodoItem({ toggleCheck, item }) {
  return (
    <div className="todo-item-wrapper">
      <CheckBox
        toggleCheck={toggleCheck}
        item={item}
      />
      <p className={item.isChecked ? 'checked' : 'checked-none'}>
        {item.title}
      </p>
    </div>
  );
}
