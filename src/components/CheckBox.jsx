import React from 'react';
import './CheckBox.scss';

export default function CheckBox(props) {
  return (
    <form>
      <input
        type="checkbox"
        checked={props.item.isChecked}
        onChange={() => props.toggleCheck(props.item.id)}
      />
    </form>
  );
}
