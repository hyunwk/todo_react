import React, { useState } from 'react';
import CheckBox from './CheckBox';
import ShowTodo from './ShowTodo';
import './TodoItem.scss';

export default function TodoItem(props) {
  return (
    <>
      <CheckBox
        handleChange={props.handleChange}
        item={props.item}
      />
      <ShowTodo
        className={props.item.isChecked ? 'checked' : 'checked-none'}
        title={props.item.title}
      />
    </>
  );
}
