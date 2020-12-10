import React from 'react';

import NameListItem from './NameListItem'

function Namelist(){
    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr />
        <ul>
            
            <NameListItem  name='Hashini' course="html"/>
            <NameListItem  name="Nirasha" course="css"/>
            <NameListItem  name="Munasinghe" course="java"/>
            <NameListItem  name="Dauna" course="c#"/>
        </ul>
        </React.Fragment>
    );
}
export default Namelist;