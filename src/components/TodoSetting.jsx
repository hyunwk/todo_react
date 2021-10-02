import React from 'react';
import './TodoSetting.scss';

export default function TodoSetting(props) {
  return (
    <>
      <ViewButton>
        <button className="all" onClick={() => props.setViewMode('all')}>
          all :  {props.countAll}
        </button>
        <button lassName="active" onClick={() => props.setViewMode('active')}>
          active : {props.countActive}
        </button>
        <button className="completed" onClick={() => props.setViewMode('completed')}>
          completed : {props.countCompleted}
        </button>
      </ViewButton>
      <DeleteCompletedBtn>
        {props.completedCount ? (
          <button onClick={() => props.deleteCompleted()}>
            all Clear
          </button>
          )
        : null}
      </DeleteCompletedBtn>
    </>
  );
}