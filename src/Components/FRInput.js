import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }
const FRInput = React.forwardRef((props,ref)=>{
    return (
        <div>
            <input ref = {ref} type='text'></input>
         </div>
 )}
)
export default FRInput
