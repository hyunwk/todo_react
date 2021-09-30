import React, { useState } from 'react'

export default function CreateTodo(props) {
    const [title, setTitle] = useState('');

    const onChange = event => {
        setTitle(event.target.value);
    }

    return (
        <>
            <input type="text" 
                    onChange={onChange}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                          {props.createNew(event.target.value)}
                          setTitle('');
                        }
                    }}
                    value={title}  
            />
        </>
    )
}
