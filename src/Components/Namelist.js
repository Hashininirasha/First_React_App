import React from 'react';

import NameListItem from './NameListItem'

function Namelist(){
    return(
        <div>
        <h1>Name List</h1>
        <hr />
        <ul>
            <NameListItem />
        </ul>
        </div>
    );
}
export default Namelist;