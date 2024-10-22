import React, { useEffect, useState } from 'react';

import NameListItem from './NameListItem';

function Namelist(){
    const [loaddata,setloaddata]= useState(new Date());
    const [Namelist,setNameList]= useState([
      {
        id:1,
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
        id:2,
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
        id:3,
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
          date: "1988-06-14T22:56:37.378Z",
          age: 37
        },
        picture: {
          medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
        },},
       
        
       ]);

useEffect(() => {

  fetch("https://www.randomuser.me/api").then(Response => {
    return Response.json();
  }).then (ResponseData => {
    setNameList(NameListItem => [...Namelist,ResponseData.results[0]]);
  });
},[loaddata]

);


const namelistcom = () => {
  return Namelist.map ((aName) => {
    return( 
      <NameListItem 
      key={aName.id} 
      name={`${aName.name.first } ${aName.name.last}`} 
      city={aName.location.city} 
      email={aName.email}
      birthday={aName.dob.date}
      Avatar={aName.picture.medium}
      />
    );
  });
};
const adduserHandler = () =>{
  
    setloaddata(new Date());
};




    return(
        <React.Fragment>
        <div className='container mt-3'>
        <button type="button" className="btn btn-danger mb-2" onClick={adduserHandler}>Add Name</button>
        <ul className="list-group">{namelistcom()}</ul>
        </div>
        
        
       
        </React.Fragment>
    );
}

export default Namelist;