import React from 'react';
import './TodoSetting.scss';

export default function TodoSetting({
  countAll, countActive, countCompleted, setViewMode, deleteCompleted,
}) {
  return (
    <>
      <div className="ViewButton">
        <button className="all" type="button" onClick={() => setViewMode('all')}>
          all :
          {' '}
          {countAll()}
        </button>
        <button className="active" type="button" onClick={() => setViewMode('active')}>
          active :
          {' '}
          {countActive()}
        </button>
        <button className="completed" type="button" onClick={() => setViewMode('completed')}>
          completed :
          {' '}
          {countCompleted()}
        </button>
      </div>
      <div className="DeleteCompletedBtn">
        {countCompleted() ? (
          <button type="button" onClick={() => deleteCompleted()}>
            all Clear
          </button>
        ) : null}
      </div>
    </>
  );
}
