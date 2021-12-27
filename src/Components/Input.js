// Child component of FocusInput.js
// Used to see how refs are passed from 
// parent to child

import React, { Component } from 'react'

class input extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }
    focusInput(){
        this.inputRef.current.focus(); // this method will be called from parent component
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
            </div>
        )
    }
}

export default input
