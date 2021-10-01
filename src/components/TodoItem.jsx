import React, {useState} from 'react'
import CheckBox from './CheckBox'
import ShowTodo from './ShowTodo'
import "./TodoItem.scss";

export default function TodoItem(props) {
    // const [isChecked, setIsChecked] = useState('false')

    // const handleChange = () => {
    //     setIsChecked(!isChecked);
    // }


    return (
        <>
            <CheckBox

                onChange={() => props.handleChange(props.item.id)}
                isChecked={props.item.isChecked}
            />
            <ShowTodo className={props.item.isChecked ? "checked" : "checked-none"}
                     title={props.item.title}/>
        </>
    )
}
