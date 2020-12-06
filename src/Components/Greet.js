import React from 'react';

/*function Greet(){
   return<h1>Hello Hasini</h1>
}*/

export const Greet = (props) => {
   console.log(props)
   
   return (
      <div>
         <h1>
            Hasi {props.name} nira {props.heroname}
         </h1>
         {props.childern}
      </div>
   )
}
export default Greet;