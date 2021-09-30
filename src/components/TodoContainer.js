import React, {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

export default function TodoContainer() {
    const [todos, setTodos] = useState(
        []
    );
    
    const createNew = (name) => {
        setTodos([...todos, {
            id: uuidv4(),
            title: name,
        }]);
    }

    
    return (
        <div
            className="todo-container"
        >

            <CreateTodo createNew={createNew}/>

            {todos.map((item) => {
                return (
                    <TodoItem key={item.id} item={item}/>
                )
            })}
            
        </div>
    )
}
