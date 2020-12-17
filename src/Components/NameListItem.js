import React from 'react';

function NameListItem(props){
    return(
        <li>
        <p>Photo : <img src={props.Avatar} />Name : {props.name}</p>
        <p>City : {props.city}</p>
        <p>Email : {props.email}</p>
        <p>Birthday : {'   '}
            {new Intl.DateTimeFormat('en-US').format(new Date(props.birthday))}</p>
        


        </li>
    );
}

export default NameListItem;