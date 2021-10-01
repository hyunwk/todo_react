import React from 'react'

export default function ShowTodo(props) {

    return (
        <div 
            style={props.style}
            className={props.className}
        >
            {props.title}
        </div>
    )
}
