import React ,{Component} from 'react';

class Msg extends Component{

    constructor(){
        super()
        this.state={
            massage: 'Welcome visitor'


        }
    }

    render(){
        return (
        <div>
        <h1>{this.state.massage}</h1>
        <button>Subscribe</button>
        </div>


        )
       
    
        
    }
}
export default Msg;