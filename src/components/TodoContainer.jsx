import React, {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import TodoSetting from './TodoSetting';

export default function TodoContainer() {
    const [todos, setTodos] = useState(
        []
    );
    const [viewMode, setViewMode] = useState('all');
    
    const createNew = (name) => {
        setTodos([...todos, {
            id: uuidv4(),
            title: name,
            isChecked: false,
        }]);
    }

    const handleChange = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isChecked = !todo.isChecked;
            } 
            return todo;
        })
        setTodos(newTodos);
    }

    const toggleAll = () => {
        const newTodos = todos.map(todo => {
            todo.isChecked = true;
            return todo;
        });
        setTodos(newTodos);
    }

    const deleteCompleted = () => {
        const filteredTodos = todos.filter(todo => !todo.isChecked);
        setTodos(filteredTodos);
    }

    const allCount = todos
        .length;

    const activeCount = todos
        .filter(todo => !todo.isChecked)
        .length;

    const completedCount = todos
        .filter(todo => todo.isChecked)
        .length;

    return (
        <div
            className="todo-container"
        >

            <CreateTodo createNew={createNew}
                        showCompleted={showCompleted}
            />
            
            {todos
                .filter((item) => {
                    if (viewMode === 'completed' && item.isChecked) {
                        return true;
                    } else if (viewMode === 'active' && !item.isChecked) {
                        return true;
                    } else if (viewMode === 'all') {
                        return true;
                    }
                })
                .map((item) => {
                return (
                    <TodoItem key={item.id} 
                                handleChange={handleChange} 
                                item={item}
                    />
                )
            })}
            <TodoSetting allCount={allCount} 
                        activeCount={activeCount} 
                        completedCount={completedCount} 
                        setViewMode={setViewMode}
                        deleteCompleted={deleteCompleted}
            />
        </div>
    );
}
