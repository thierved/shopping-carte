import React from 'react';


const Item = (props) => {  
    return (
        <li className="item"
            onClick={props.clickable ? () => props.handleClick(props.id) : null}>{
                props.name}<span>${props.price}</span>
        </li>
    );
}

export default Item;