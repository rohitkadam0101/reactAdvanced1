import React, { PureComponent } from 'react';

class PureComp extends PureComponent{
    render(){
        console.log('PureComponent Render')
        return(
            <div>
                <h1>Pure Component</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
export default PureComp