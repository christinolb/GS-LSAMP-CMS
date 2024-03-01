import React from "react";
import '../styles/selectionButton.css';

const SelectionButton = ({label, page="/#"}) => {
    return (
        <a href={page}><button type="submit">{label}</button></a>
    );
}

export default SelectionButton;