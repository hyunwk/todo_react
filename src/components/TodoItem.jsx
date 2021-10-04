import React from 'react';
import CheckBox from './CheckBox';
import ShowTodo from './ShowTodo';
import './TodoItem.scss';

export default function TodoItem({ toggleCheck, item }) {
  return (
    <>
      <CheckBox
        toggleCheck={toggleCheck}
        item={item}
      />
      <ShowTodo
        className={item.isChecked ? 'checked' : 'checked-none'}
        title={item.title}
      />
    </>
  );
}
