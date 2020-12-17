import React from 'react';
import moment from 'moment'
function NameListItem(props){
    return(
        <li>
        <p>Photo : <img src={props.Avatar} />Name : {props.name}</p>
        <p>City : {props.city}</p>
        <p>Email : {props.email}</p>
        <p>Birthday : {moment(props.dob).format('DD-MM-YYYY')}</p>
        


        </li>
    );
}

export default NameListItem;