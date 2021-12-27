import React, { Component } from 'react';
import FRInput from './FRInput';
// Used to see working of FordWard ref
class FRParentInput extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    submitHandler = ()=>{
        this.inputRef.current.focus();//points to element in child component where we used ref
    }
    render(){
        return(
            <div>
                <FRInput ref = {this.inputRef}/>
                <button onClick={this.submitHandler}>Focus</button>
            </div>
        )
    }
}
export default FRParentInput