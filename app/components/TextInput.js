import React from 'react';
import '../styles/text-input.css';

const TextInput = ({name, label}) => {
    return (
        <div className='text-input'>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} required />
        </div>
    )
}

export default TextInput;