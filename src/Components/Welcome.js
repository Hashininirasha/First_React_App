import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        return (
        <h1>
            Welcome {this.props.name} to my web {this.props.food}
        </h1>
        )
    }



}
export default Welcome;
