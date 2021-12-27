
import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('RegularComponent Render')
        return (
            <div>
                Regular Component
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default RegularComp
