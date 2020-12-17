import React from 'react';

import NameListItem from './NameListItem'

function Namelist(){

    const Namelist=[{
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
}];
    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr />
        <ul>
             <NameListItem  
             name={`${Namelist[0].name.first } ${Namelist[0].name.last}`} 
             city={Namelist[0].location.city} 
             email={Namelist[0].email}
             birthday={Namelist[0].dob.date +" "+Namelist[0].dob.age}
             Avatar={Namelist[0].picture.medium}
             />
           
        </ul>
        </React.Fragment>
    );
}
export default Namelist;