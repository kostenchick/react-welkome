import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count+1
        });
    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count-1
            });
        } else if(this.state.count === 0) {
            this.setState({
                count: this.state.count
            })
        }

    }

    render() {
        // const h2 = React.createElement('h2', {}, this.state.count);
        // const buttonDecrement = React.createElement('button', {onClick: () => {this.decrement()}}, '-')
        // const buttonIncrement = React.createElement('button', {title: 'Hello', onClick: () => {this.increment()}}, '+');
        // return React.createElement(React.Fragment, null, h2, buttonDecrement, buttonIncrement);
        return(<>
        <h2 title="hello">{this.state.count}</h2>
        <button onClick={() => {this.decrement()}}>-</button>
        <button onClick={() => {this.decrement()}}>+</button>
        </>)
    }
}

export default Counter;