import React from 'react';

function NameListItem(props){
    return(
        <li>
        <p>{props.name}</p>
        <p>{props.city}</p>
        <p>{props.email}</p>
        <p>{props.birthday}</p>
        <p>{props.Avatar}</p>


        </li>
    );
}

export default NameListItem;