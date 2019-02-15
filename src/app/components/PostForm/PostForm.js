import React, { Component } from 'react';
import './PostForm.css';

import { withRouter } from 'react-router';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
        this.PostInfo = this.PostInfo.bind(this);
        this.PutInfo = this.PutInfo.bind(this);
    }

    SubmitInfo(e) {
        e.preventDefault();
        if (sessionStorage.getItem('idToChange') == null) {
            this.PostInfo();
        } else {
            this.PutInfo();
        }
    }

    HandleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    PutInfo(e) {
        const id = sessionStorage.getItem('idToChange');
        fetch('/api/task/' + id, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                M.toast({ html: "Info Updated" });
                console.log(data);
            })
            .finally(() => sessionStorage.clear());

        this.props.history.push('/');
    }

    PostInfo() {
        fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => M.toast({ html: "New Entry: Ok" }));

        //If this is inside a promise, it won't work. Why? :c
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="PostForm">
                <form onSubmit={this.SubmitInfo.bind(this)}>
                    <input type="text" autoComplete="off" name="name" placeholder="Name" onChange={this.HandleChange.bind(this)}></input>
                    <input type="text" autoComplete="off" name="description" placeholder="Description" onChange={this.HandleChange.bind(this)}></input>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default withRouter(PostForm);