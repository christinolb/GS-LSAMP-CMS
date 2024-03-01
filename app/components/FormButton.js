import React from 'react';
import '../styles/formButton.css';

const formButton = ({label}) => {
    return (
        <button className='btn' type="submit">{label}</button>
    );
}

export default formButton;