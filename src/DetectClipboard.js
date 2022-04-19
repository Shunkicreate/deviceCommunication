import React from 'react';

const copy = () => {
    var copyText = document.querySelector("#input");
    copyText.select();
    copyText.execCommand("copy");
}
export const RegisterEvents = () => {
    return (
        <div>
            <button onClick={copy}>
                Click me
            </button>
            <input id="input" type="text" />
            <button onClick={copy}>Copy
            </button>
        </div>

    )
}
// export class RegisterEvents extends React.Component {
//     constructor(props) {
//         // super(props);
//         // this.state = { date: new Date() };

//         // document.querySelector("#copy").addEventListener("click", copy);
//     }
//     // copy = () => {
//     //     var copyText = document.querySelector("#input");
//     //     copyText.select();
//     //     copyText.execCommand("copy");
//     // }

//     // render() {
//     //     return (
//     //         <div><input id="input" type="text" /><button onClick={this.copy}>Copy</button></div>
//     //     );
//     // }

//     handleClick = () => {
//         console.log('this is:', this);
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 Click me
//             </button>
//         );
//     }
// }



