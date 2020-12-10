import React from 'react';

import NameListItem from './NameListItem'

function Namelist(){

    const Namelist={
        name: {
        title: "mr",
        first: "brad",
        last: "gibson"
      },
      location: {
        
        city: "kilcoole",
      },
      email: "brad.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
};
    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr />
        <ul>
            
            <NameListItem  name='Hashini' course="html" email="hasi@gmail.com"/>
            <NameListItem  name="Nirasha" course="css" email="nira@gmail.com"/>
            <NameListItem  name="Munasinghe" course="java" email="muna@gmail.com"/>
            <NameListItem  name="Dauna" course="c#" email="dasu@gmail.com"/>
        </ul>
        </React.Fragment>
    );
}
export default Namelist;