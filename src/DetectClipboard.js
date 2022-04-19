import React from 'react';

export class RegisterEvents extends React.Component {
    constructor(props) {
        // super(props);
        // this.state = { date: new Date() };

        // document.querySelector("#copy").addEventListener("click", copy);
    }
    // copy = () => {
    //     var copyText = document.querySelector("#input");
    //     copyText.select();
    //     copyText.execCommand("copy");
    // }

    // render() {
    //     return (
    //         <div><input id="input" type="text" /><button onClick={this.copy}>Copy</button></div>
    //     );
    // }

    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}


