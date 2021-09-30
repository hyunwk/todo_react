import React from 'react'
import "./CheckBox.scss";
export default function CheckBox(props) {
    return (
        <div>
            <input 
                type="checkbox"
                onChange={() => props.onChange()}
                />
        </div>
    )
}
