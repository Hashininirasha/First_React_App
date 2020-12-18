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
      },},
      {
      name: {
        title: "mr",
        first: "Deann",
        last: "Marshall"
      },
      location: {
        
        city: "Shepparton",
      },
      email: "deann.marshall@example.com",
      dob: {
        date: "1951-11-19T11:24:57.168Z",
        age: 69
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
      },},
      {
        name: {
          title: "mr",
          first: "Florence",
          last: "King"
        },
        location: {
          
          city: "Plymouth",
        },
        email: "florence.king@example.com",
        dob: {
          date: "florence.king@example.com",
          age: 37
        },
        picture: {
          medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
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
        <ul>
             <NameListItem  
             name={`${Namelist[1].name.first } ${Namelist[1].name.last}`} 
             city={Namelist[1].location.city} 
             email={Namelist[1].email}
             birthday={Namelist[1].dob.date +" "+Namelist[1].dob.age}
             Avatar={Namelist[1].picture.medium}
             />
           
        </ul>
        <ul>
             <NameListItem  
             name={`${Namelist[2].name.first } ${Namelist[2].name.last}`} 
             city={Namelist[2].location.city} 
             email={Namelist[2].email}
             birthday={Namelist[2].dob.date +" "+Namelist[2].dob.age}
             Avatar={Namelist[2].picture.medium}
             />
           
        </ul>
        </React.Fragment>
    );
}
export default Namelist;