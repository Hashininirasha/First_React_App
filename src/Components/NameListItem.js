import React from 'react';

function NameListItem(props){
    return(
        <li>
        <p><img src={props.Avatar} />{props.name}</p>
        <p>{props.city}</p>
        <p>{props.email}</p>
        <p>{props.birthday}</p>
        


        </li>
    );
}

export default NameListItem;