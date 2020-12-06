import React ,{Component} from 'react';

class Msg extends Component{

    constructor(){
        super()
        this.state={
            massage: 'Welcome visitor'


        }
    }

    changeMessage(){

        this.setState({
            massage:'Thanks for subscribing ..'
        })
    }

    render(){
        return (
        <div>
        <h1>{this.state.massage}</h1>
        <button onClick={() => this.changeMessage()} >Subscribe</button>
        </div>


        )
       
    
        
    }
}
export default Msg;