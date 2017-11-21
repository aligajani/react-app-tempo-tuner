import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        }        
    }

    increment = () => {
        this.setState({
            clicks: this.state.clicks + 1,

        }); 
    }


    makeAjaxRequest = (e) => {
        const id = e.target.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            response => {
                response.json().then(
                    data => {
                        this.props.heading(data.title)
                    }
                )
            }
        )
        console.log(`From Frame: ${JSON.stringify(this.state)}`);
        
    }

    render() {
        return (
            <div className="Frame">
                <p> {this.props.title} </p>
                <small>{this.state.clicks} </small>
                <button onClick={this.increment}> Click me </button>
                <p>{this.props.fresh}</p>
                <input type="text" onChange={this.makeAjaxRequest} />
            </div>
        );
    }
}

export default Frame;