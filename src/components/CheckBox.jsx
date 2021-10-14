import React from 'react';
import './CheckBox.scss';

export default function CheckBox({ toggleCheck, item }) {
  console.log('item', item);
  const inputId = `checkBox${item.id}`;
  return (
    <form>
      <input
        className="todo-check"
        id={inputId}
        type="checkbox"
        checked={item.isChecked}
        onChange={() => toggleCheck(item.id)}
      />
      <label htmlFor={inputId}></label>
    </form>
  );
}
