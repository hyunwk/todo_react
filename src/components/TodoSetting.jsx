import React from 'react';
import './TodoSetting.scss';

export default function TodoSetting(props) {
  return (
    <div>
      <div>

        <button
          className="all"
          onClick={() => props.setViewMode('all')}
          >
          all : {props.allCount}
        </button>
        <button
          className="active"
          onClick={() => props.setViewMode('active')}
          >
          active : {props.activeCount}
        </button>
        <button className="completed" onClick={() => props.setViewMode('completed')}>completed : {props.completedCount} </button>
        
      </div>
      <div>
        <button onClick={() => props.deleteCompleted()}>
          all Clear
        </button>
      </div>
    </div>
  );
}
