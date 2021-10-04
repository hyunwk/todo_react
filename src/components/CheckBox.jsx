import React from 'react';
import './CheckBox.scss';

export default function CheckBox({ toggleCheck, item }) {
  return (
    <form>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => toggleCheck(item.id)}
      />
    </form>
  );
}
