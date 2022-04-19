import React from 'react';
// import ReactDOM from 'react-dom';
// import * as ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';


export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }
    tick = () => {

        this.setState({
            date: new Date()
        });
    }
    static timerID
    static tick

    componentDidMount() {
        Clock.timerID = window.setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(Clock.timerID);
    }

    render() {
        return ( <div id = "clockdom" ><div> <h1> Hello, world!</h1><div></div><h2> It is { new Date().toLocaleTimeString() }.</h2></div></div>
        );
    }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();