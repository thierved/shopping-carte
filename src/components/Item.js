import React from 'react';


const Item = (props) => {  
    return (
        <li className="item"
        onClick={() => props.handleClick(props.id)}>{props.name}</li>
    );
}

export default Item;