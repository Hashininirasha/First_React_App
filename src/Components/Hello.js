import React from 'react';

const Hello = () => {
    //return(
    //    <div>
     //       <h2>Hello Hashini</h2>
       // </div>
   // )
    return React.createElement('div',{id:'hello',class:'dummy'},React.createElement('h1','null','Hello Hasini'))
}

export default Hello;