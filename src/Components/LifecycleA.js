import React, { Component } from 'react';
class LifecycleA extends Component{
    // First Life Cycle method
    constructor(props){
        super(props)
        this.state = {
            name:'Rohit'
        }
        console.log('LifecycleA constructor')
    }
    //second method
    static getDerivedStateFromProps(props,state){
        console.log('LifecylceA get getDerivedStateFromProps ')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA ComponentDidMount')
    }
    render(){ //third method is render
        console.log('Lifecylce A render')
        return(
            <div>
                <h1>LifeCycle Component</h1>
            </div>
        )
    }
}
export default LifecycleA;