// Parent component for input.js used to call focusRef

import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }
    submitHandler = ()=>{
        this.componentRef.current.focusInput(); // method from child component
    }
    render() {
        return (
            <div>
                {/* / passing this ref to child component */}
                <Input ref={this.componentRef} /> /
                <button onClick={this.submitHandler}>Focus</button>
            </div>
        )
    }
}

export default FocusInput
