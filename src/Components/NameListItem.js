import React from 'react';
import moment from 'moment'
import './NameListItem.css'


function NameListItem(props){
    return(
        <li>
        <p className='redtext'>Photo : <img src={props.Avatar} alt={props.name} /><br/><br/>Name : {props.name}</p>
        <p style={{color:'green'}}>City : {props.city}</p>
        <p>Email : {props.email}</p>
        <p>Birthday : {moment(props.dob).format('DD-MM-YYYY')}</p>
        


        </li>
    );
}

export default NameListItem;