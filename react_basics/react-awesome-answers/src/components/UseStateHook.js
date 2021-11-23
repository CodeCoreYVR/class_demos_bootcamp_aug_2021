import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(0);
    // this useState function returns an array,
    // the first element of the array is the state, 
    // the second element is the function that for you to change the value of the state
    // same as this.setState({count:1})
    // the argument inside useState is the default value of this state

    try {
        // connect with the db
    } catch (error) {
        // what you are going to do with 
    }
    // finally {
    //     // finally i will run this code here
    // }

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Add 1</button>
            <br />
            {count}
        </div>
    )
}

// import React, { Component } from 'react'

// export default class UseStateHook extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             name: "sddsdf",
//             location: "sdfdd"
//         }

//     }
//     handleAddCount = () => {
//         console.log(this);
//         this.setState({
//             count: this.state.count + 1
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleAddCount}>Add 1</button>
//                 <br />
//                 {this.state.count}
//             </div>
//         )
//     }
// }
