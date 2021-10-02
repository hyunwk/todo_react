import React, { useState } from 'react';
import CheckBox from './CheckBox';

export default function CreateTodo(props) {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form>
      <label htmlFor="checkBox"/>
        <input
          type="checkbox"
          onChange={() => props.toggleAll()}
        />
      <label htmlFor="todoInput" />
        <input
          type="text"
          onChange={onChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              { props.createNew(event.target.value); }
              setTitle('');
            }
          }}
          value={title}
        />
    </form>
  )
}
