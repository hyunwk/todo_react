import React, { useState } from 'react';

export default function CreateTodo({ createNew, toggleAll }) {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  // status 없어도 됌
  return (
    <div className="creat-todo">
      <input
        className="check"
        type="checkbox"
        onChange={() => toggleAll()}
      />
      <input
        type="text"
        className="input-text"
        onChange={onChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            createNew(event.target.value);
            setTitle('');
          }
        }}
        value={title}
      />
    </div>
  );
}
