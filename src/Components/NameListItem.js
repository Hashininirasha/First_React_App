import React from 'react';
import moment from 'moment'
import './NameListItem.css'


function NameListItem(props){
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-md">
                <img src={props.Avatar} alt={props.name} />
                </div>
                <div className="col-sm">
                <p>Name : {props.name}</p>
                <p>City : {props.city}</p>
                <p>Email : {props.email}</p>
                <p>Birthday : {moment(props.dob).format('DD-MM-YYYY')}</p>
                </div>
            </div>
        </li>
    );
}

export default NameListItem;