import React from 'react'
import TodoItem from './TodoItem';
export default function TodoList(props) {
    return (
      <ul>
        {props.todos
            .filter((item) => {
              if (props.viewMode === 'completed' && item.isChecked) {
                return true;
              } if (props.viewMode === 'active' && !item.isChecked) {
                return true;
              } if (props.viewMode === 'all') {
                return true;
              }
            })
            .map((item) => (
              <li key={item.id}>
                <TodoItem
                  key={item.id}
                  toggleCheck={props.toggleCheck}
                  item={item}
                />
              </li>
              )
            )
          }
      </ul>
      
    )
}
