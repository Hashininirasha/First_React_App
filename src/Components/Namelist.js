import React from 'react';

import NameListItem from './NameListItem'

function Namelist(){
    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr />
        <ul>
            
            <NameListItem  name='Hashini' course="html"/>
            <NameListItem />
            <NameListItem />
            <NameListItem />
        </ul>
        </React.Fragment>
    );
}
export default Namelist;