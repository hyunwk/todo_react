import React from 'react';
import './CheckBox.scss';

export default function CheckBox(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.isChecked}
        onChange={() => props.handleChange(props.item.id)}
      />
    </div>
  );
}
