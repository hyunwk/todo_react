import React, { useState } from 'react';
import CheckBox from './CheckBox';

export default function CreateTodo(props) {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  return ( F
    <>
      <input
        type="checkbox"
        onChange={() => props.toggleAll()}
      />
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
    </}
