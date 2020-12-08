import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state={
            count : 0
            }
        }
        increment(){
            this.setState({
                count : this.state.count + 1
            },
            () => {
                console.log("Callback_Value",this.state.count)
            }
             )

            console.log(this.state.count)
        }

        incrementFive(){
            this.increment()
            this.increment()
            this.increment()
        }


    render(){ 
        return (
            <div>
                <div>Counter - {this.state.count}</div>
                <button onClick={() => this.incrementFive() }>Increment</button>
            </div>
            )
    }
}
export default Counter;