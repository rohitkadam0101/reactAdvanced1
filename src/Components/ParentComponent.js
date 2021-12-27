
import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Rohit'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Rohit'
            })
        },2000)
    }
    render() {
        console.log('ParentComponent Render')
        // Here we can see that prev prop value of state.name is of same type when we are updating
        // So pure component do not implement didcomponentMount and do not re-render it
        // while regular component re-renders as didComponentMount is always true
        // if we set Parent component as pure then it will render only one time
        return (
            <div>
                <h1>Parent Component</h1>
              {/* <RegularComp name = {this.state.name}></RegularComp> 
              <PureComp name = {this.state.name}></PureComp>     */}
              {/* <MemoComponent name = {this.state.name}/> // Memo Component is used for functional Component=>pure component */}
            </div>
        )
    }
}

export default ParentComponent
