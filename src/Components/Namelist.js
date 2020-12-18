import React from 'react';

import NameListItem from './NameListItem'

function Namelist(){

    const Namelist=[{
        id=1,
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
        id=2,
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
        id=3,
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

const namelistcom = () => {
  return (
  Namelist.map(aName => {
    return(  <ul>
      <NameListItem 
      key={aName.id} 
      name={`${aName.name.first } ${aName.name.last}`} 
      city={aName.location.city} 
      email={aName.email}
      birthday={aName.dob.date +" "+aName.dob.age}
      Avatar={aName.picture.medium}
      />
    
  </ul>)
  })
)
}


    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr />
        {namelistcom()}
       
        </React.Fragment>
    );
}
export default Namelist;