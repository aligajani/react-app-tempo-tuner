import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {

    requestNewAvatarViaId = (e) => {

        const id = e.target.value;
        if (isNaN(id) || id == '') {
            return;
        }

        fetch(`https://reqres.in/api/users/${id}`)
        .then(
            response => {
                if (response.status == 200) {
                    response.json()
                    .then(
                        data => {
                            this.props.onChangeUserAvatar(data.data.avatar);
                        }
                    )
                } else {
                    throw new Error(response.status);
                }
            }
        ).catch(
            error => {
                console.log(error);
            }
        );
    }
      
    render() {
        return (
            <div className="Frame">
                Hello from Child Component <input type="number" min="1" onChange={this.requestNewAvatarViaId}/>
                <p> {this.props.consoleText} </p>
            </div>
        );
    }
}

export default Frame;