import React from 'react';
import './TodoSetting.scss';

export default function TodoSetting({
  todos, setViewMode, deleteCompleted,
}) {

  const countAll = () => todos.length;
  const countActive = () => todos.filter((todo) => todo.isChecked).length;
  const countCompleted = () => todos.filter((todo) => !todo.isChecked).length;

  return (
    <div className="setting-container">
      <div className="ViewButton">
        <button className="all" type="button" onClick={() => setViewMode('all')}>
          all :
          {' ', countAll()}
        </button>
        <button className="active" type="button" onClick={() => setViewMode('active')}>
          active :
          {' ', countActive()}
        </button>
        <button className="completed" type="button" onClick={() => setViewMode('completed')}>
          completed :
          {' ', countCompleted()}
        </button>
      </div>
      <div className="DeleteCompletedBtn">
        {countCompleted() ? (
          <button type="button" onClick={() => deleteCompleted()}>
            all Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
