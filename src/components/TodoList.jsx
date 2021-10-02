import React from 'react'

export default function TodoList(props) {
    return (
        {props.todos
            .filter((item) => {
              if (viewMode === 'completed' && item.isChecked) {
                return true;
              } if (viewMode === 'active' && !item.isChecked) {
                return true;
              } if (viewMode === 'all') {
                return true;
              }
            })
            .map((item) => (
              <TodoItem
                key={item.id}
                handleChange={() => props.handleChange()}
                item={item}
              />
            ))}
    )
}
