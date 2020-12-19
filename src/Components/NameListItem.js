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
                <h4>{props.name}</h4>
                <p>{props.city} | {props.email} </p>
                <small>{moment(props.dob).format('DD-MM-YYYY')}</small>
                </div>
            </div>
        </li>
    );
}

export default NameListItem;