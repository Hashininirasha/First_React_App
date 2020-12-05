import React from 'react'

/*function Greet(){
   return<h1>Hello Hasini</h1>
}*/

export const Greet = (props) => {
console.log(props)
return <h1>Hasi {props.name}</h1>
}
export default Greet